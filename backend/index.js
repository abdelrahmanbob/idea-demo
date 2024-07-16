const express = require('express');
const app = express();
const routes = require('./routes/idea_routes');
const mongoos = require('mongoose');
const db_connection = require('./config/db');

db_connection();


const hostname = "127.0.0.1";
const port = 2000;


app.use(express.static('public'));
app.use('/', routes);


// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/about', function(req, res){
//     res.sendFile(__dirname + '/about.html');
// });







app.listen(port, hostname, () => {
    console.log('Server is running on port ' + port);
});