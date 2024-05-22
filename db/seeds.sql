INSERT INTO department(id, name) VALUES
(1, 'Finance'),
(2, 'Food & Beverage'),
(3, 'Front Desk'),
(4, 'IT');

INSERT INTO role(id, title, salary, department_id) VALUES
(1, 'Account Manager', 110000, 1),
(2, 'Accoutant', 90000, 1),
(3, 'Executive Chef', 100000, 2),
(4, 'Cooks', 60000, 2),
(5, 'FD Manager', 85000, 3),
(6, 'FD Associate', 55000, 3),
(7, 'IT Lead', 125000, 4),
(8, 'Support Specialist', 115000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'John', 'Doe', 1, NULL),
(2, 'Nathaniel', 'Brooks', 2, 1),
(3, 'Emily', 'Carter', 3, NULL),
(4, 'Olivia', 'Bennett', 4, 3),
(5, 'Ethan', 'Spencer', 5, NULL),
(6, 'Sophia', 'Mitchell', 6, 5),
(7, 'Ava', 'Sullivan', 7, NULL),
(8, 'Lucas', 'Hayes', 8, 7);