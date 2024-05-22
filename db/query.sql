SELECT role.id, title, name AS department, salary FROM role
JOIN department ON department.id = role.department_id;

SELECT employee.id, employee.first_name, employee.last_name, role.title, name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee
JOIN role ON role.id = employee.role_id
JOIN department ON department.id = role.department_id
LEFT JOIN employee manager ON manager.id = employee.manager_id;