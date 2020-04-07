const cTable = require("console.table");
const logo = require("asciiart-logo");
const inquirer = require("inquirer");
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "BAssist43!",
  database: "employee_DB",
});

connection.connect(function (err) {
  if (err) throw err;
  runPrompts();
});

function runPrompts() {
  inquirer
    .prompt({
      name: "start",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "View All Employees By Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "Exit",
      ],
    })
    .then(function (choice) {
      switch (choice.start) {
        case "View All Employees":
          viewAll();
          break;

        case "View All Employees By Department":
          viewByDept();
          break;

        case "View All Employees By Manager":
          viewByManager();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Remove Employee":
          removeEmployee();
          break;

        case "Update Employee Role":
          updateRole();
          break;

        case "Update Employee Manager":
          updateManager();
          break;

        case "Exit":
          connection.end();
          break;
      }
    });
}

function viewAll() {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(
        res[i].id +
          " | " +
          res[i].first_name +
          " | " +
          res[i].last_name +
          " | " +
          res[i].role_id +
          " | " +
          res[i].manager_id
      );
    }
    console.log("--------------------------------");
  });
  runPrompts();
}

function viewByDept() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id);
    }
    console.log("--------------------------------");
  });
  runPrompts();
}

function viewByManager() {
  connection.query("SELECT * FROM employee WHERE manager_id=?", function (
    err,
    res
  ) {
    if (err) throw err;
    console.log(res);
  });
}
