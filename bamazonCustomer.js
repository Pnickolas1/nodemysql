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

connectToDb().then(function() {
    console.log("You\'re connected with thread id: " + connection.threadId);
    return orderWorkflow().then(function() {
        return orderComplete();
    });
});

function orderWorkflow() {
    return inventory().then(productChoices).then(productChoices);
}

function productChoices(products) {
    return getOrderId(products).then(selectOrder);
}

function selectOrder(product) {
    return inputQty(product).then(function(quantity) {
        return productSold(product, quantity);
    });
}

function inputQty(product) {
    return getQty(product).then(function(quantity) {
        console.log(product);
        if (product.stock_qty >= quantity) {
            return +quantity;
        } else {
            throw product;
        }
    });
}

function productSold(product, quantity) {
    var id = product.item_id;
    var db_qty = product.stock_qty;
    var items_sold = product.product_sales;
    return updateStock(id, db_qty, items_sold).then(function() {
        confirmOrder({
            quantity: quantity,
            price: product.price,
            name: product.product_name
        });
    });
}

function updateStock(item_id, product_sales) {
    return queryDatabase('UPDATE products SET product_sales = ? WHERE item_id = ?', [product_sales, item_id]);
}

function getQty(product) {
    return inquirer.prompt([{
        type: "input",
        name: "quantity",
        message: "How many would " + product.product_name + "(s) would you like to purchase? "
    }]).then(function(answers) {
        console.log(answers);
        return parseInt(answers.quantity, 10);
    });
}

function getOrderId(products) {
    return inquirer.prompt([{
        type: 'input',
        name: 'item_id',
        message: 'Enter the item_id you would like to purchase: '
    }]).then(function(answers) {
        return products.find(function(item) {
            console.log(item.item_id);
            return item.item_id == answers.item_id;
        });
    });
}

function totalInventory() {
    return queryDatabase('SELECT * FROM products');
}

function inventory() {
    return totalInventory().then(function(products) {
        console.table(products);
        return products;
    });
}

function connectToDb() {
    return connectionMethod('connect');
}

function orderComplete() {
    return connectionMethod('end');
}

function queryDatabase(string, data) {
    return new Promise(function(success, failure) {
        connection.query(string, data, function(err, response) {
            if (err) {
                failure(err);
                console.log(err);
            } else {
                console.log(response);
                success(response);
            }
        });
    });
}


function connectionMethod(method) {
    return new Promise(function(success, failure) {
        connection[method](function(err, result) {
            if (err) {
                failure(err);
            } else {
                success(result);
            }
        });
    });
}


function confirmOrder(result) {
    var quantity = result.quantity;
    console.log('You purchased ' + quantity + ' ' + result.name + '(s) for $' + (quantity * result.price));
    return result;
}