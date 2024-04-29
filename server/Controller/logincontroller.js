const  mongoose = require('mongoose');
const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
app.use(express.json)

function login(){
app.post('/login', async (req,res) => {
    const {username, password} = req.body;
    try{
        const user = await UserActivation.findOne({username});
        if(!user){
            return res.status(404)._construct.send("User not found")
        }
        const match = await bcrypt.compare(password, user.passwordhash)
        if (match){
            const token =jwt.sign({username: user.username},'your-secret-key', {expiresIn :'24h'})
            res.json({token})
        } else {
            res.status(401).send('invalid credentials')
        }
    }catch(err){
        res.status(500).send('error finded')
    }
    
})
}

module.exports = login;