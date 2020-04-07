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
      }
    });
}

function viewAll() {
    runSearch(console.table());
  };

function viewByDept() {
    
}
