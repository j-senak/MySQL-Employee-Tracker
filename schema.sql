DROP DATABASE IF EXISTS employee_DB;
CREATE database employee_DB;

USE employee_DB;

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT (30) REFERENCES role(id),
  manager_id INT(30) REFERENCES employee(id),
  PRIMARY KEY (id)
);

SELECT * FROM employee;