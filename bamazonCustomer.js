var inquirer = require('inquirer');
var mysql = require('mysql');

var connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 8889,
    database: 'bamazon'
});

function queryDb(string, opts){
    return new Promise(function (success,failure) {
        connect.query(string, opts, function (err, res) {
            if (err) {
                failure(err);
            } else {
                success(res);
            }
        });
    });
}


connect.query("Select * FROM products", function(err, res) {
    console.log("\n Current Product List\n")
    for (var i = 0; i < res.length; i++) {
        console.log("Item ID: " + res[i].item_id + " | " +
            "Product Name: " + res[i].product_name + " | " +
            "Dept: " + res[i].department_name + " | " +
            "Price: " + res[i].price + " | " +
            "Qty: " + res[i].stock_qty);
    };
    selection().then(function (res) {
        // something else

            for(var q= 0; q < res.length;q++){
                console.log("Item ID: " + res[i].item_id + " | " +
            "Product Name: " + res[i].product_name + " | " +
            "Dept: " + res[i].department_name + " | " +
            "Price: " + res[i].price + " | " +
            "Qty: " + res[i].stock_qty);
            }
                selection();
    });
});


var selection = function() {
    return inquirer.prompt([{
        name: "product_Id",
        type: "input",
        message: "What is the Item ID you would like to bid on? ",
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
        validate: function(value) {
            if (isNaN(value) === false) {
                return true;
            }
            return false;
        }
    }]).then(function(answer) {
        var query = "SELECT * FROM products where item_id = ? ";
        return queryDb(query, [answer.start, answer.end]);
    });
};