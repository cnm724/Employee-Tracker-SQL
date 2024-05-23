-- -- wrote queries here to make sure they work before incorporating into server.js
-- SELECT * FROM department;

-- SELECT role.id, title, name AS department, salary FROM role
-- JOIN department ON department.id = role.department_id;

-- SELECT employee.id, employee.first_name, employee.last_name, role.title, name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee
-- JOIN role ON role.id = employee.role_id
-- JOIN department ON department.id = role.department_id
-- LEFT JOIN employee manager ON manager.id = employee.manager_id;


-- chatGPT, onces manual seeding it will allow added values to be entered at the end and not allow to place in an already existing key position
SELECT setval(pg_get_serial_sequence('department', 'id'), MAX(id)) FROM department;
SELECT setval(pg_get_serial_sequence('role', 'id'), MAX(id)) FROM role;
SELECT setval(pg_get_serial_sequence('employee', 'id'), MAX(id)) FROM employee;
