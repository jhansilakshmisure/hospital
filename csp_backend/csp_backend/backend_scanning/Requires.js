const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const scanning = require('./Routes/scanning');
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/scanning', scanning);



module.exports = app;