const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('morgan');
// const user = require('.http/controllers/user');

const app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended:false }));	
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'src')));
	
//Add headers
app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

//api
app.use('api/user',user);
app.get('/',function(req, res) {
	res.sendFile(__dirname, 'index.html');
});

//catch 404 and forward to error handler
app.use(function(req,res,next){
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

//error handler
app.use(function(err,req,res,next){
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err:{};
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
