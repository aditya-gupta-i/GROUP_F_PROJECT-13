var http = require('http');
var url = require('url');
var fs = require('fs');
var mysql=require("mysql");

var con=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'1MySql_!',
	database:'mydb'
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected...!!");
});

http.createServer(function (req, res) {
	var q = url.parse(req.url);
  	var d = url.parse(req.url,true).query;
  	if(q.pathname=='/admin'){
		if(q.query==null) {
			fs.readFile('add.html', function(err, data) {
				if(err) throw err;
	    		res.writeHead(200, {'Content-Type': 'text/html'});
				res.write(data);
				res.end();
			});
		}
		else if(q.query!=null) {
			var sql="INSERT INTO markers (name,lat,lng) VALUES ('"+d.place+"','"+d.lat+"','"+d.lng+"')";
			con.query(sql,function(err, result) {
				if(err) throw err;
				console.log("Rows affected : "+result.affectedRows);
			});

			con.query("SELECT * FROM markers",function(err, result){
				console.log(result);
				var mark=JSON.stringify(result);

				fs.writeFile('markers.js',"var data="+mark+";",function(err){
					if(err) throw err;
				})
			});

			res.writeHead(302, {'Location':'http://'+req.headers['host']+'/admin'});
			return res.end();
		}
	}
	else if(q.pathname=='/load2.js') {
		fs.readFile('load2.js',function(err,data) {
			if(err) throw err;
			res.writeHead(200, {'Content-Type' : 'text/javascript'});
			res.write(data);
			res.end();
		});
	}
	else if(q.pathname=='/markers.js') {
		fs.readFile('markers.js',function(err,data) {
			if(err) throw err;
			res.writeHead(200, {'Content-Type' : 'text/javascript'});
			res.write(data);
			res.end();
		});
	}
	else{		
		fs.readFile('map.html',function(err,data) {
			if(err) throw err;
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.write(data);
			res.end();
		});	
	}
}).listen(8080);