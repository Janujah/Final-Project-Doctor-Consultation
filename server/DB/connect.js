const Mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const userRoutes = require('../Routes/normaluserRoutes');
const doctorRoutes = require('../Routes/DoctorRoutes');
const SignUpRoutes = require('../Routes/signUpRoutes');
const TechRoutes = require('../Routes/TechnicianRoutes');
// const loginRoutes = require('../Routes/loginRoutes');
const bodyParser = require('body-parser');
const envurl = process.env.mongodbUrl;

const cors = require('cors')
const app = express();
const Port = 3002;
app.use(express.json());
app.use(cors());
app.use('/users', userRoutes)
app.use('/Doctors', doctorRoutes)
app.use('/Technicians', TechRoutes)
app.use('/SignUp', SignUpRoutes)
// app.use('/', loginRoutes)
app.use(bodyParser.json());
const { createProxyMiddleware } = require('http-proxy-middleware');


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
