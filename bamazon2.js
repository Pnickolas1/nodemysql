var inquirer = require('inquirer');
var mysql = require('mysql');
require('console.table');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 8889,
    database: 'bamazon'
});

connecTOdb.then(function () {
	console.log('you\'re connected as: ' + connection.threadID);
	return showAllProdocuts();
}).then(function (products){
	console.log()
})
});


function queryDB(string,data){
	return new Promise(function (succes,failure){
	connection.query(string, data, function (err,response) {
		if(err){
			failure();
		} else {
			success(response)
		}
	});
  });
}


function showAllProducts(){
	return queryDB('select* from products');
}


function connecTOdb(){
	return new Promise(function(success,failure){
connection.connect(function(err,response) { 
	if (err) {
		failure(err_;
	} else{
		success();
	}
	  });
	});
}