// const express = require("express");
// const sequelize = require("./config/connection");
// const inquirer = require("inquirer");

// require('dotenv').config();
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // -- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// // -- WHEN I choose to view all departments
// // -- THEN I am presented with a formatted table showing department names and department ids
// // -- WHEN I choose to view all roles
// // -- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// // -- WHEN I choose to view all employees
// // -- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// // -- WHEN I choose to add a department
// // -- THEN I am prompted to enter the name of the department and that department is added to the database
// // -- WHEN I choose to add a role
// // -- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// // -- WHEN I choose to add an employee
// // -- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// // -- WHEN I choose to update an employee role
// // -- THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

// // question prompts for user input
// inquirer
//   .prompt([
//     {
//         type: 'list',
//         name: 'menu',
//         message: 'What would you like to do?',
//         choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"],
//     }
//   ])
//   .then((answers) => {
//     return thi
//     }
// )
// .then(() => {
//     console.log("logo.svg file was created!");
// })
// .catch((error) => {
//     console.error(error);
// });
