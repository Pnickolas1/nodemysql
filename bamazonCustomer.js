var inquirer = require('inquirer');
var mysql = require('mysql');

var connect = createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	port: 8889,
	database: 'bamazon'
});


connection.connect(function(err){
	if(err) throw err;
	console.log("connected as id " + connection.threadId);
});


connection.query("Select * FROM products", function(err,res){
	for(var i =0; i< res.length;i++){
    console.log(res[i].produc_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_qty);
  		}
  console.log("-----------------------------------");	
});