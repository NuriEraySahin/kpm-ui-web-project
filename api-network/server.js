const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3070;

// place holder for the data
const users = [{
  firstName: "from API v2",
  lastName: "from API v2",
  email: "from API v2"
  }];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../kpm-ui/build')));

app.get('/wifi/users', (req, res) => {
  console.log('wifi/users called!')
  res.json(users);
});

app.post('/wifi/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user added wifi");
});

app.get('/', (req,res) => {
  res.send(`<h1>API Running on the port ${port}</h1>`);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});