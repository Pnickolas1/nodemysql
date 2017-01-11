var inquirer = require('inquirer');
var mysql = require('mysql');

var connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 8889,
    database: 'bamazon'
});


connect.query("Select * FROM products", function(err, res) {
    console.log("\n Current Product List\n")
    for (var i = 0; i < res.length; i++) {
        console.log("Product ID: " + res[i].item_id + " | " +
            "Product Name: " + res[i].product_name + " | " +
            "Dept: " + res[i].department_name + " | " +
            "Price: " + res[i].price + " | " +
            "Qty: " + res[i].stock_qty);
    };
    selection();
});


var selection = function() {
    inquirer.prompt([{
        name: "product_Id",
        type: "input",
        message: "What is the Product ID you would like to bid on? ",
        validate: function(value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    }, {
        name: "qty",
        type: "input",
        message: "How many would you like to purchase? ",
        validate: function() {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    }]).then(function(answer) {
        console.log("You input Product ID: " + answer.product_Id);
    });
};