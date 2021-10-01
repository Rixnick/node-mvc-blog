const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors =require('cors');


const app = express();


//Initial Middle State
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//
app.get('/', (req, res, next) => {
  res.render('Index');
})


module.exports = app;