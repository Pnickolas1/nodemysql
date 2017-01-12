CREATE DATABASE bamazon;

CREATE TABLE products
(
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(13,2) NOT NULL,
stock_qty INT(6) NOT NULL,
PRIMARY KEY(item_id)
)
