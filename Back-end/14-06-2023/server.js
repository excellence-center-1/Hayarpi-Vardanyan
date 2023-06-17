const express = require('express');
const fs = require('fs');

const app = express();
const port = 3001;
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json()); 

app.get('/listUsers', (req, res) => {
  fs.readFile(__dirname + '/users.json', 'utf8', (err, data) => {
    console.log(data);
    res.end(data);
  });
});

app.post('/add', (req, res) => {
  const newUser = {
    user4: {
      name: 'name',
      password: 'password4',
      profession: 'teacher',
      id: 4,
    },
  };
  fs.readFile(__dirname + '/users.json', 'utf8', (err, data) => {
    const users = JSON.parse(data);
    
    users.push(newUser);

    fs.writeFile(__dirname + '/users.json',JSON.stringify(users),'utf8',(err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error writing to users.json');
      } else {
        res.send(users);
      }
    });
  });
});



/*app.delete('/listUsers/:id', (req, res) => {
  const userId = req.params.id;
  fs.readFile(__dirname + '/users.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading users.json');
    } else {
      let users = JSON.parse(data);
      if (users.hasOwnProperty(userId)) {
        delete users[userId];
        fs.writeFile(
          __dirname + '/users.json',
          JSON.stringify(users),
          'utf8',
          (err) => {
            if (err) {
              console.error(err);
              res.status(500).send('Error writing to users.json');
            } else {
              res.send(users);
            }
          }
        );
      } else {
        res.status(404).send('User not found');
      }
    }
  });
});*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
