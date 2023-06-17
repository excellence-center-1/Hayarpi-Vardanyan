const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const port = 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/addUser', (req, res) => {
  const userData = {
    name: 'name',
    password: 'password4',
    profession: 'teacher',
    id: 4,
  };

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read user data' });
    }

    const users = JSON.parse(data);
    users.user4 = userData;

    fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to add user data' });
      }

      res.status(200).json({ message: 'User data added successfully' });
    });
  });
});

app.delete('/deleteUser/:id', (req, res) => {
  const userId = req.params.id;

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read user data' });
    }

    let users = JSON.parse(data);
    if (users.hasOwnProperty(`user${userId}`)) {
      const removedUser = users[`user${userId}`];
      delete users[`user${userId}`];

      fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to delete user data' });
        }

        res.status(200).json(removedUser);
      });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
});

app.put('/updateUserData/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read user data' });
    }

    let users = JSON.parse(data);
    if (users.hasOwnProperty(`user${userId}`)) {
      users[`user${userId}`] = updatedUser;

      fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to update user data' });
        }

        res.status(200).json(updatedUser);
      });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


