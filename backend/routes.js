const express = require('express')
const controller = require("./controller.js") // contain functions
const app = express()
const port = 3000
const admin = require("./admin.js") // for routing purposes

app.get('/', function(req,res){
	controller.usermap(req,res); // render map to client side
})
 
app.get('/blog/', function(req,res){
	controller.blog(req,res); // return the blog	
})

app.use('/admin', admin)

app.listen(port, () => console.log(`The app is listening on port ${port}!`))
