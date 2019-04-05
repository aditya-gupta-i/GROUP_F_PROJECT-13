var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'map',
  password : 'musicmaps',
  database : 'data'
});
connection.connect()



module.exports = {
	place : function() {
		var place_data;
		connection.query('SELECT * FROM location', function (err, rows, fields) {
			if (err) 
		  		throw err
			place_data = rows;		  	
		});
		return place_data;
	},
}


