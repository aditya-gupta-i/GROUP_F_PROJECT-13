var model = require('./model.js');
module.exports = {
	usermap : function(req,res){
		res.send(model.place())	//return the data of different places
	},
	
	blog : function(req,res){
		var filename  = "/home/snowman/Desktop/GROUP_F_PROJECT-13/backend/blog/" + req.query.lat + "_" + req.query.lon + ".html";
		res.sendFile(filename,{dotfiles: 'deny'},function(err){
			if(err)
				res.send("no such blog")
			else
				console.log("sent")
		})
	},

	adminlogin : function(req, res){
		if (req.query.username==undefined  || req.query.password==undefined) {
    			res.send('login failed');
  		} else if(req.query.username === "amy" && req.query.password === "amyspassword") {
    			req.session.user = "amy";
    			req.session.admin = true;
  	  		res.send("login success!");
  		}
		else{
			res.send("wrong credentials");
		}
	},

	adminadd : function(req, res){
		res.send("add data")
	},

	adminedit : function(req, res){
		res.send("edit data")
	},

	admindelete : function(req, res){
		res.send("delete data")
	},
	
	adminlogout : function(req,res){
		req.session.admin=false;
		console.log(req.session)
		res.send("logout success")
	}
}
