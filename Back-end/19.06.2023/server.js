const express = require('express');
const readline = require('readline');
const bodyParser = require('body-parser');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const port = 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/addUser', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/*const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userData = {};

rl.question('Enter your name: ', (name) => {
  userData.name = name;
  rl.question('Enter your password: ', (password) => {
    userData.password = password;
    rl.question('Enter your profession: ', (profession) => {
      userData.profession = profession;
      rl.question('Enter your ID: ', (id) => {
        userData.id = parseInt(id);

        console.log(userData);

        fs.readFile('users.json', 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            return;
          }

          const users = JSON.parse(data);
          const id = `user${userData.id}`;
          users[id] = userData;

          fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
              console.error(err);
              return;
            }

            console.log('User data added successfully');
          });
        });

        rl.close();
      });
    });
  });
});

rl.on('close', () => {
  console.log('User input completed');
});*/



app.post('/addUser', (req, res) => {
  let userData = {
    name: req.body.name,
    password: req.body.password,
    profession: req.body.profession,
    id: req.body.id,
  };
  console.log(userData);

  try {
    fs.readFile('users.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to read user data' });
      }

      const users = JSON.parse(data);
      const id = `user${userData.id}`;
      users[id] = userData;

      fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to add user data' });
        }

        res.status(200).json({ message: 'User data added successfully' });
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



