const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(_dirname, 'src')));

app.get('/',function(req, res){
	res.send('Invalid page');
})

app.use('')
app.listen('3000', function(){
	console.log('The server has started')
});