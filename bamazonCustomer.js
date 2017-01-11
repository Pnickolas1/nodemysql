var inquirer = require('inquirer');
var mysql = require('mysql');

var connect = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	port: 8889,
	database: 'bamazon'
});


connect.query("Select * FROM products", function(err,res){
    console.log(res);
});