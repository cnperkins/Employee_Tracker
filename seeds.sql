DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30)
);

CREATE TABLE role (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary INT,
department_id INT,
department VARCHAR (20) NOT NULL )
;

CREATE TABLE employee (
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT NULL,
manager_id INT NULL,
department_id INT,
FOREIGN KEY (department_id) references department(id)
);


INSERT INTO department (name)
VALUES ("Produce")
, ("Meat")
, ("Dairy")
, ("Front");

INSERT INTO role (title, salary, department, department_id)
VALUES ("Manager", 30000, "Produce", 1)
, ("Stocker", 15000, "Dairy", 2)
, ("Sales Associate", 10000, "Meat", 3)
, ("Cashier", 20000, "Front", 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id, department_id)
VALUES ("Sally", "Jones", 1, 1, 1)
, ("Bob", "Snob", 2, 1, 2)
, ("Scary", "Spice", 3, 1,3)
, ("Ginger", "Spice", 4, 1,2);

SELECT * FROM department;
SELECT * FROM employee;
SELECT * FROM role;