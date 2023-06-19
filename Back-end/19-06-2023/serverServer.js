/*const express = require('express')
const fs = require('fs')

const app = express()
const port = 3001

const myLogger = (req, res, next) =>{
  console.log('We are on the',req.url);
  next();
}

app.use(myLogger);
app.get('/listUs', (req, res) => {
  fs.readFile( __dirname + "/" + "users.json", 'utf8', (err, data) => {
    console.log( data );
    res.end( data );
 });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/

const express = require('express');
const fs = require('fs');

const bodyParser = require('body-parser');
const port = 3001;
const app = express();

app.use(bodyParser.json());

const { users } = require('./loginUser.json');

const loginMiddleware = (req, res, next) => {
  const { login, password } = req.body;

  const user = users.find((user) => user.login === login);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid login or password' });
  }
  req.user = user;
  next();
};

app.post('/login', loginMiddleware, (req, res) => {
  res.json({ message: 'Logged in successfully', user: req.user });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




