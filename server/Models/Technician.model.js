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
    place:{
        type:String,
        require: true
    },
    position:{
        type:String
    },
    registeredId:{
        type:String
    }
    
});

const NormalUser = Mongoose.Schema('Technicians',schema);
module.exports = NormalUser;