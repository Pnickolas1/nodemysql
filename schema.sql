CREATE DATABASE bamazon;

CREATE TABLE products_test
(
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(13,2) NOT NULL,
stock_qty INT(6) NOT NULL,
product_sales INT(6) NULL,
PRIMARY KEY(item_id)
)



INSERT INTO products_test
	(product_name,department_name,price,stock_qty,product_sales)
VALUES
	('cork','kitchen',.20,400,0),
	('wine stopper','kitchen',1.00,500,0),
	('vase','kitchen',5.00,1000,0),
	('salt/pepper holder','kitchen',2.00,500,0),
	('pens','office',.50,150,0),
	('staples','office',.10,5000,0),
	('pottery','kitchen',50.00,25,0),	
	('candles','living',5.00,300,0),
	('blanket','living',6.00,450,0),
	('pillow','living',2.50,1000,0),
	('bed sheets','living',100.00,100,0),
	('scissors','office',2.30,300,0),
	('beer','food',1.00,400,0),
	('phone charger','office',1.25,400,0),
	('rug','living',1.75,500,0),
	('coffe table','furniture',150.00,500,0),
	('couch','furniture',175.00,650,0),
	('lazy-boy','furniture',120.00,30,0);
	