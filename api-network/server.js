const express = require("express");
var piWifi = require("pi-wifi");

const { networkInterfaces } = require("os");
const path = require("path");
const app = express(),
  bodyParser = require("body-parser");
port = 3070;

// place holder for the data
const nets = networkInterfaces();
const results = Object.create(null);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../kpm-ui/build")));

//Get IP Address
app.get("/wifi/ipaddress", function (req, res) {
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
      const familyV4Value = typeof net.family === "string" ? "IPv4" : 4;
      if (net.family === familyV4Value && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }

        results[name] = net.address;
      }
    }
  }

  //console.log(results);
  res.send(results);
});

//Scan networks
app.get("/wifi/networks", (req, res) => {
  var response;
  piWifi.scan(function (err, networks) {
    if (err) {
      return console.error(err.message);
    }
    //console.log(networks);
    res.end(JSON.stringify(networks));
  });
});

//Connect to a wifi
app.get("/wifi/connect", (req, res) => {
  var ssid = req.query.ssid;
  var pwd = req.query.pwd;
  //console.log("ssid: ",ssid);
  //console.log("pwd: ",pwd);

  piWifi.connect(ssid, pwd, function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log("Successful connection!");
  });
});

//Get status
app.get("/wifi/status", (req, res) => {
  piWifi.status("wlan0", function (err, status) {
    if (err) {
      return console.error(err.message);
    }
    //console.log(status);
    res.end(JSON.stringify(status));
  });
});

// app.get('/wifi/users', (req, res) => {
//   console.log('wifi/users called!')
//   res.json(users);
// });

// app.post('/wifi/user', (req, res) => {
//   const user = req.body.user;
//   console.log('Adding user:::::', user);
//   users.push(user);
//   res.json("user added wifi");
// });

// app.get('/', (req,res) => {
//   res.send(`<h1>API Running on the port ${port}</h1>`);
// });

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
