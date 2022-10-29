var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Get data array from this route
app.get('/cats', (req, res) => {
  const cats = ['Hello Kitty', 'Garfield', 'Frits']
  // ^ This would be our databass call...
  res.json(cats);
});

module.exports = app;
