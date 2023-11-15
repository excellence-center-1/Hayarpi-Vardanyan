const apiError = require('../error/apiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/model');

const generateJwt = (id, email) => {
    return jwt.sign(
        { id, email },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    );
}

class UserController {
    async registration(req, res, next) {
        try {
            const {name, email, password } = req.body;
            if (!email || !password) {
                return next(apiError.badRequest('Incorrect email or password'));
            }

            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return next(apiError.badRequest('A user with this email already exists'));
            }

            const hashPassword = await bcrypt.hash(password, 5);
            const newUser = await User.create({name, email, password: hashPassword });
            const token = generateJwt(newUser.id, newUser.email);
            return res.json({ token });
        } catch (error) {
            console.log(error)
            return next(apiError.internal('Internal Server Error'));
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });

            if (!user) {
                return next(apiError.internal('User is not found'));
            }

            const isPasswordValid = bcrypt.compareSync(password, user.password);
            if (!isPasswordValid) {
                return next(apiError.internal('Incorrect password specified'));
            }

            const token = generateJwt(user.id, user.email);
            return res.json({ token });
        } catch (error) {
            return next(apiError.internal('Internal Server Error'));
        }
    }

    async check(req, res, next) {
        try {
            const token = generateJwt(req.user.id, req.user.email);
            return res.json({ token });
        } catch (error) {
            return next(apiError.internal('Internal Server Error'));
        }
    }
}

module.exports = new UserController();