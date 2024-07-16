const mongoose = require('mongoose');
const db_url = "mongodb://localhost:27017/IDEA";

const db_connection = async()=>{

try{await mongoose.connect(db_url);

console.log("Database connected");

}

catch(error){
    console.log('Error while connecting' + error.message);
}

}

module.exports = db_connection;