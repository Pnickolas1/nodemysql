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



INSERT INTO products
	(product_name,department_name,price,stock_qty)
VALUES
	('cork','kitchen',.20,400),
	('wine stopper','kitchen',1.00,500),
	('vase','kitchen',5.00,1000),
	('salt/pepper holder','kitchen',2.00,500),
	('pens','office',.50,150),
	('staples','office',.10,5000),
	('pottery','kitchen',50.00,25),	
	('candles','living',5.00,300),
	('blanket','living',6.00,450),
	('pillow','living',2.50,1000),
	('bed sheets','living',100.00,100),
	('scissors','office',2.30,300),
	('beer','food',1.00,400),
	('phone charger','office',1.25,400),
	('rug','living',1.75,500),
	('coffe table','furniture',150.00,500),
	('couch','furniture',175.00,650),
	('lazy-boy','furniture',120.00,30);
	