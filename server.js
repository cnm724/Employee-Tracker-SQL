const express = require("express");
const inquirer = require("inquirer");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const pool = new Pool(
  {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: "localhost",
    database: process.env.DB_NAME
  },
)

pool.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database");
    // Start the server and then prompt the user
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      promptUser();
    });
  }
});

// question prompts for user input
function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "exit"],
      }
    ])
    // switch case that will run functions based on user input
    .then((answers) => {
      switch (answers.menu) {
        case "view all departments": viewDepartments();
          break;
        case "view all roles": viewRoles();
          break;
        case "view all employees": viewEmployees();
          break;
        case "add a department": addDepartment();
          break;
        case "add a role": addRole();
          break;
        case "add an employee": addEmployee();
          break;
        case "update an employee role": UpdateEmRole();
          break;
        default:
          console.log("Goodbye 👋🏽");
          process.exit(0);
      }
    }
    )
    .catch((error) => {
      console.error(error);
    });
}

// ==============================================================================
// functions to bring up table data
function viewDepartments() {
  const sql = `SELECT * FROM department;`;
  pool.query(sql, (err, res) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    console.log('Departments:');
    console.table(res.rows); // Use console.table to display the rows in a table format
    promptUser();
  });
}

function viewRoles() {
  const sql = `SELECT role.id AS role_id, title, name AS department, salary FROM role
  JOIN department ON department.id = role.department_id;
  `;
  pool.query(sql, (err, res) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    console.log('Roles:');
    console.table(res.rows);
    promptUser();
  });
}

function viewEmployees() {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee
  JOIN role ON role.id = employee.role_id
  JOIN department ON department.id = role.department_id
  LEFT JOIN employee manager ON manager.id = employee.manager_id;
  `;
  pool.query(sql, (err, res) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    console.log('Employees:');
    console.table(res.rows);
    promptUser();
  });
}

// ==============================================================================
// Functions to get user input to add new/updated data to tables

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newDept",
        message: "Enter New Department Name:"
      }
    ])
    .then((answer) => {
      const sql = `INSERT INTO department(name) VALUES ($1)`;
      const values = [answer.newDept];
      pool.query(sql, values, (err, res) => {
        if (err) {
          console.error('Error adding department:', err);
          promptUser();
          return;
        }
        console.log(`Added Department: ${answer.newDept}`,);
        promptUser();
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      promptUser();
    });
}

function addRole() {
  const sql = `SELECT id, name FROM department`;
  pool.query(sql, (err, res) => {
    if (err) {
      console.error('Error fetching departments:', err);
      promptUser();
      return;
    }

    const departmentChoices = res.rows.map(department => ({
      name: department.name,
      value: department.id
    }));

    inquirer
      .prompt([
        {
          type: "input",
          name: "newTitle",
          message: "Enter New Role Title:"
        },
        {
          type: "input",
          name: "salary",
          message: "Enter Role's Salary:"
        },
        {
          type: "list",
          name: "deptId",
          message: "Enter New Department Name:",
          choices: departmentChoices
        }
      ])
      .then((answers) => {
        const sql = `INSERT INTO role(title, salary, department_id) VALUES ($1, $2, $3)`;
        const values = [answers.newTitle, answers.salary, answers.deptId];
        pool.query(sql, values, (err, res) => {
          if (err) {
            console.error('Error adding role:', err);
            promptUser();
            return;
          }
          console.log(`Added Role: ${answers.newTitle}`,);
          promptUser();
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        promptUser();
      });
  });
}
