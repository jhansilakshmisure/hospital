const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const doctor = require('./Routes/doctor');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/doctor', doctor);
module.exports=app;