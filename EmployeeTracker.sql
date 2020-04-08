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
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,4) NULL,
    department_id INT REFERENCES department(name)
);

CREATE TABLE department (
    name VARCHAR(30) NOT NULL
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Senak", 8412, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sandy", "Rhodes", 7105, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Martin", "Abby", 6561, 0);

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO department (name)
VALUES ("Production");



