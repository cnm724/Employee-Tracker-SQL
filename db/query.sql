-- chatGPT, onces manual seeding it will allow added values to be entered at the end and not allow to place in an already existing key position
SELECT setval(pg_get_serial_sequence('department', 'id'), MAX(id)) FROM department;
SELECT setval(pg_get_serial_sequence('role', 'id'), MAX(id)) FROM role;
SELECT setval(pg_get_serial_sequence('employee', 'id'), MAX(id)) FROM employee;
