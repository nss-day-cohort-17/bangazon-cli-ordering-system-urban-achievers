'use strict'

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('bangazon-mt.sqlite')

// create tables (customers, orders, order_line, products, payment)
db.run(`CREATE TABLE IF NOT EXISTS customers (customer_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, address TEXT, city TEXT, state TEXT, postal_code INT, phone INT)`)
db.run(`CREATE TABLE IF NOT EXISTS products (product_id INTEGER PRIMARY KEY AUTOINCREMENT, product_name TEXT, product_price NUMERIC(8,2))`)
db.run(`CREATE TABLE IF NOT EXISTS payment_options (payment_id INTEGER PRIMARY KEY AUTOINCREMENT, customer_id INT, payment_type TEXT, acct_number INT, FOREIGN KEY(customer_id) REFERENCES customers(customer_id))`)
db.run(`CREATE TABLE IF NOT EXISTS orders (order_id INTEGER PRIMARY KEY AUTOINCREMENT, customer_id INT, payment_id INT, payment_status TEXT, FOREIGN KEY(customer_id) REFERENCES customers(customer_id), FOREIGN KEY(payment_id) REFERENCES payment_options(payment_id))`)
db.run(`CREATE TABLE IF NOT EXISTS order_line (order_line_id INTEGER PRIMARY KEY AUTOINCREMENT, order_id INT, product_id INT, FOREIGN KEY(order_id) REFERENCES orders(order_id), FOREIGN KEY(product_id) REFERENCES product(product_id))`)
