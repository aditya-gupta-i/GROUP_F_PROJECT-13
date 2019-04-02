module.exports = {
	usermap : function(req,res){
		res.send("map")
	},
	
	blog : function(req,res){
		res.send("blog")
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
