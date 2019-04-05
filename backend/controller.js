var model = require('./model.js');
module.exports = {
	usermap : function(req,res){
		model.place(res)
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
		res.send("add data") // return the file that will add the blog
	},

	blogadd : function(req,res){
		res.send('add blog')
		// image storer
	},

	adminedit : function(req, res){
		res.send("edit data")
	},

	admindelete : function(req, res){
		model.deleteplace(req,res);
	},
	
	adminlogout : function(req,res){
		req.session.admin=false;
		console.log(req.session)
		res.send("logout success")
	}
}
