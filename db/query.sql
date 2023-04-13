SELECT department.id, roles.dept_id
FROM department
JOIN  on ;

SELECT roles.id, employee.role_id
FROM roles
JOIN  on ;

SELECT employee.id, employee.manager_id
FROM employee
JOIN  on ;

-- for viewRoles, need to display dept_name using dept_id
-- for viewEmployees, need to join salary to employee using role_id, manager name using manager_id, role name using role_id, dept using role_id
