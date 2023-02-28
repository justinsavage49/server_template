//Standard imports/declarations
const express = require('express');
const http = require('http');
const app = express();
const port = 3000;

//Middleware boilerplate to load dirs and path them properly
app.use('/', express.static(__dirname + '/'));
app.use(express.urlencoded({extended: false}));
app.use('/static', express.static('./static'));

//Server host on port 3000
app.listen(port, () => {
  console.log(`${port}`);
});

//Serve index.html and index.css from '/' to port 3000
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    res.sendFile(__dirname + '/styles.css');
});

//This function serves text when a request is made at '/server-text'
app.get('/server-text', (req, res) => {
    res.json("This text was requested from the server");
});

