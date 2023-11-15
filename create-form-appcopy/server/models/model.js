const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}, 
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
})

const Role = sequelize.define('roles', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.STRING, unique: true, defaultValue: "USER"},
    description: {type: DataTypes.INTEGER, allowNull: false},
})

const UserRole = sequelize.define('users_roles', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})



User.hasMany(UserRole)
UserRole.belongsTo(User)

Role.hasMany(UserRole)
UserRole.belongsTo(Role)

module.exports = {
    User,
    UserRole,
    Role
}