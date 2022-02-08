const express = require('express');
const mongoose = require('mongoose');
const Survey = require('./survey');

require('dotenv').config();

const app = express();

const USERNAME = process.env.NAME;
const PASSWORD = process.env.PASSWORD;
const MONGOURL = process.env.MONGOURL

console.log("username and password: ", USERNAME);
(async () => {
    try {
        mongoose.connect(`${MONGOURL}`);
    } catch (error) {
         console.log("Mongo Error: ", error.message)
    }
})();

  
 
app.get('/', async(req, res) => {
    
    const survey = await Survey.find({});
    
    res.status(200).json(survey);
})
const port = process.env.PORT || 4000;
app.listen(port, (event) => console.log('app started on port ', port));

module.exports = app;