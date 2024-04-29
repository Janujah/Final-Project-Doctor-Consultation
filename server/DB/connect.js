const Mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const userRoutes = require('../Routes/normaluserRoutes');
const envurl = process.env.mongodbUrl;
const cors = require('cors')
const app = express();
const Port = 3002;
app.use(express.json());
app.use(cors());
app.use('/user', userRoutes)
function connectDB() {

    Mongoose.connect(envurl)
        .then(() =>
            console.log("You are connected")
        )
        .catch((err) => {
            console.log("You are not connected", err)
        });


    app.listen(Port, () => {
        console.log(`Server is running on port ${Port}`);
    });
}

module.exports = connectDB; 
