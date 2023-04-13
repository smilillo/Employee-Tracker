DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(30)
);

CREATE TABLE roles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  dept_id INT AUTO_INCREMENT
  FOREIGN KEY (dept_id)
  REFERENCES department(id)
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
    FOREIGN KEY (role_id)
    REFERENCES roles(id),
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
);