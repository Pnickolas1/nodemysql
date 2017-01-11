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
    	console.log("\nProduct List\n")
    for(var i=0; i <res.length; i++){
    	console.log(res[i].item_id + " | "  + res[i].product_name + " | " + res[i].department_name +  " | " + res[i].price + " | " + res[i].stock_qty);
    }
});