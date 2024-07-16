const express = require('express');
const app = express();
const mongoose = require('mongoose'); // Corrected the spelling of 'mongoose'
const db_connection = require('./config/db');
const cors = require('cors');

db_connection(); // Ensure this is called correctly

const hostname = "127.0.0.1";
const port = 2000;

app.use(cors());

app.get('/api/whoarewe', (req, res) => {
    res.json({
        mainText: "We are a company committed to delivering the best services.",
        subText: "Our mission is to enhance customer satisfaction through excellence."
    });
});

// Uncomment if needed
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/about', function(req, res){
//     res.sendFile(__dirname + '/about.html');
// });

app.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});
