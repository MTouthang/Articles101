--- create table (todo)

CREATE TABLE todo_demo (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)


--- Create table (customers table)
CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
	email VARCHAR(40) NOT NULL DEFAULT 'No email provided',
	amount INT,
	PRIMARY KEY(id)
)


--- add some valid value 
INSERT INTO customers(name, email, amount) values (
	"mang",
	"mang@gmail.com",
	30
)

--- Insert many values 
INSERT INTO customers (name, email, amount) 
values ( "mang", "mang@gmail.com", 30),
	( "mang", "mang@gmail.com", 30),
	( "touthang", "touthang@gmail.com", 50),
	( "mangesh", "mangesh@gmail.com", 70),
	( "nasik", "nasik@gmail.com", 20),
	( "subham", "subham@gmail.com", 10),
	( "shiyam", "shiyam@gmail.com", 90),
	( "vinay", "vinay@gmail.com", 70)
)

--- perform some query 
--- return only all the available name
SELECT name from customers;
SELECT email from customers;
SELECT amount from customers;

--- run alias "as"
SELECT amount as purchase FROM customers;

--- WHERE clause
SELECT * from customers WHERE name="mang";

--- Update 
UPDATE customers SET email="mamang@gmail.com" WHERE id=1;
--- multiple update 
UPDATE customers set email="mang@gmail" WHERE name="mang";

--- Delete 
--- deleting single instance
DELETE from customers WHERE id=4

--- deleting multiple instance
DELETE from customers WHERE name="mang"

--- Insert student information
CREATE table student_info (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(15),
	last_name VARCHAR(20),
	email VARCHAR(80) NOT NULL DEFAULT "No email provided",
	login_count INT 
	PRIMARY KEY(id)
)

INSERT INTO student_info(first_name, last_name, email) 
values ( "mang", "touthang", "touthang@gmail.com"),
( "mang", "touthang", "touthang@gmail.com"),
( "mangesh", "thakre", "mangesh@gmail.com"),
( "nasik", "mohammad", "naski@gmail.com"),
( "subham", "sahu", "subham@gmail.com"),
( "vinay", "pratap", "vinay@gmail.com"),
( "prabir", "kumar", "prabir@gmail.com")

--- select two column name
select first_name, last_name from student_info;

--- CONCAT Give full name of all students
SELECT CONCAT (first_name, ' ', last_name) as fullname from student_info;

--- CONCAT - full_name and login count - 


--- REPLACE 
SELECT REPLACE (firstname, 'm', '@') as username FROM student_info;

--- SUBSTRING
SELECT SUBSTRING (email, 1, 7) from students;

--- REVERSE
SELECT REVERSE(first_name) FROM student_info;

--- CHAR_LENGTH
SELECT email, CHAR_LENGTH(email) AS length from student_info;

--- UPPER CASE AND LOWER CASE
SELECT UPPER(first_name) as Upper_name from student_info;
SELECT LOWER(first_name) as LOwer_name from student_info;