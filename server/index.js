const connectDb = require('./DB/connect');
const express = require('express');
// const proxy = require('./DB/proxy')
const app = express();
const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:3000'  
}));

app.use(cors());

app.use(express.json());
connectDb();
// proxy();
