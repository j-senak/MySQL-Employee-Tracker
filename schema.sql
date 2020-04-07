DROP DATABASE IF EXISTS employee_DB;
CREATE database employee_DB;

USE employee_DB;

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT REFERENCES role(id),
  manager_id INT REFERENCES employee(id),
  PRIMARY KEY (id)
);

CREATE TABLE role (
    title VARCHAR NULL,
    salary DECIMAL(10,4) NULL,
    department_id INT REFERENCES department(name)
);

CREATE TABLE department (
    name VARCHAR(30) NOT NULL
);