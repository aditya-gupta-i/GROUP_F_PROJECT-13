var express = require('express');
var router = express.Router();
var controller = require('./controller.js')

router.get('/', function(req, res){
	controller.adminlogin(req,res);	// admin authentication
});

router.get('/add/', function(req, res){
	controller.adminadd(req,res); // add data
});

router.get('/edit/', function(req,res){
	controller.adminedit(req,res); //edit data
});

router.get('/delete/', function(req,res){
	controller.admindelete(req,res); //delete data
});

module.exports = router;
