// Import (require) connection.js into orm.js

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// Export the ORM object in module.exports.

var connection = require("./connection.js");

var orm ={
	selectAll: function(table, cb){
		var queryString = "SELECT* FROM ??";
	    connection.query(queryString, [table], function(err, result) {
	      if (err) {throw err;}
	      console.log(result);
	    });
	},
	insertOne: function(name, cb){
		var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)";
		connection.query(queryString, [name], function (err, result){
		  if (err){throw err;}
		  console.log("Burger inserted");
		});
	},
	updateOne: function(devoured, id, cb){
		var queryString = "Update burgers";
		queryWords += " SET devoured = ";
		queryWords += devoured;
		queryWords += " WHERE id = ";
		queryWords += id + ";"

		connection.query(queryWords, function(err, result){
			if (err){throw err;}
		  	console.log("Burger updated");
		});
	}
};
module.exports = orm;


