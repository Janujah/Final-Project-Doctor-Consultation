const Mongoose = require('mongoose');
const schema = Mongoose.Schema ({
    fullName:{
        type:String,
        require: true
    },
    Age:{
        type:Number,
        require: true
    },   
    email:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require: true
    },
    residence:{
        type:String,
        require: true
    },
    position:{
        type:String
    },
    doctorId:{
        type:String
    }
    
});

const normalUser = Mongoose.Schema('Doctors',schema);
module.exports = normalUser;