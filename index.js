const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees_db'
});

connection.connect(err => {
    if (err) throw err;
    startMenu();
});

// Actions available in menu
const menuOptions = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "firstQ",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role"
        ]
    }
];

// Start menu function with switch case for each option
function startMenu() {
    inquirer.prompt(menuOptions)
        .then(answer => {
            switch (answer) {
            // ask if should use a switch case for this or if else
            case "View All Departments":
                viewDepartments();
            break;
            case "View All Roles":
                viewRoles();
            break;
            case "View All Employees":
                viewEmployees();
            break;
            case "Add a Department":
                addDepartment();
            break;
            case "Add a Role":
                addRole();
            break;
            case "Add an Employee":
                addEmployee();
            break;
            case "Update an Employee Role":
                updateRole();
            break;
            }
        });
}
// View all departments - formatted table showing department names and department ids
function viewDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
        console.table(results);
        startMenu();
    });
}

// View all roles - job title, role id, the department that role belongs to, and salary
function viewRoles() {
    db.query('SELECT role.id, role.title AS role, role.salary, department.name AS department FROM role INNER JOIN department ON (department.id = role.department_id);', 
    function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
        console.table(results);
        startMenu();
    });
}

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, 
// last names, job titles, departments, salaries, and managers that the employees report to
function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        if (err) {
            console.log(err);
            return;
        }
        console.table(results);
        startMenu();
    });
}

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the department?",
            name: "newDept"
        }
    ])
    .then()
};

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the role?",
            name: "newRole"
        },
        {
            type: "input",
            message: "What is the salary of the role?",
            name: "newRoleSalary"
        },
        {
            type: "list",
            message: "What department does the role belong to?",
            name: "newRoleDept",
            choices: [

            ]
        }
    ])
    .then()
};

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, 
// and that employee is added to the database
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the first name of the employee?",
            name: "newEmployeeFirst"
        },
        {
            type: "input",
            message: "What is the last name of the employee?",
            name: "newEmployeeLast"
        },
        {
            type: "list",
            message: "What is the role of the employee?",
            name: "newEmployeeRole",
            choices: [

            ]
        },
        {
            type: "list",
            message: "Who is the manager of the employee?",
            name: "newEmployeeManager",
            choices: [

            ]
        }
    ])
    .then()
};

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is 
// updated in the database
function updateRole() {
    inquirer.prompt([
        {
            type: "list",
            message: "Which employee's role would you like to update?",
            name: "updateRoleEmployee",
            choices: [

            ]
        },
        {
            type: "list",
            message: "What is the updated role for the employee?",
            name: "updateRoleTitle",
            choices: [

            ]
        },
    ])
    .then()
};
