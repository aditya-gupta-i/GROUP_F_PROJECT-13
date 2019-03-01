var http = require('http');
var url = require('url');
var fs = require('fs');
var mysql=require("mysql");

var con=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'1Mysql_!',
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
			var sql="INSERT INTO markers (place,lat,lng) VALUES ('"+d.place+"','"+d.lat+"','"+d.lng+"')";
			con.query(sql,function(err, result) {
				if(err) throw err;
				console.log("Rows affected : "+result.affectedRows);
			});

			res.writeHead(302, {'Location':'http://'+req.headers['host']+'/admin'});
			return res.end();
		}
	}
	// else if(q.pathname=='/tojson') {
	// 	fs.access('./marker.json',fs.F_OK, (err)=> {
	// 		if(err)
	// 			fs.appendFile('markers.json','')
	// 	})
	// }
	else {		
		fs.readFile('map.html',function(err,data) {
			if(err) throw err;
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.write(data);
			res.end();
		});	
	}
}).listen(8080);