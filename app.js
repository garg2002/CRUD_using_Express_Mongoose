 require('dotenv').config();   // dotenv
const express = require('express');
const cors = require('cors');   // cors
const userRoutes = require('./routes/userRoutes.js');   // route
const connectToDb = require('./config/db.js');   // connect to database

const app = express();

//Express  Middleware

app.use(express.json());   // body parser
app.use(express.urlencoded({extended: true}));   // body parser
app .use(cors());   // cors

 //init connection  to database
 connectToDb(); 

app.use('/', userRoutes); 
 // route
 // route


module.exports = app;   // export app.js