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
		res.send("admin login")
	},

	adminadd : function(req, res){
		res.send("add data")
	},

	adminedit : function(req, res){
		res.send("edit data")
	},

	admindelete : function(req, res){
		res.send("delete data")
	}
}
