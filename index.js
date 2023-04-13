const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);


// THEN I am presented with the following options: 
// view all departments, view all roles, view all employees, add a department, add a role, 
// add an employee, and update an employee role
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

function menu() {
    inquirer.prompt(menuOptions)
        .then(answer => {
            if (answer === "View All Departments"){
                viewDepartments();
            } else if (answer === "View All Roles"){
                viewRoles();
            } else if (answer === "View All Employees"){
                viewEmployees();
            } else if (answer === "Add a Department"){
                addDepartment();
            } else if (answer === "Add a Role"){
                addRole();
            } else if (answer === "Add an Employee"){
                addEmployee();
            } else if (answer === "Update an Employee Role"){
                updateRole();
            }
        });
}
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
function viewDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
});
}

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, 
// and the salary for that role
function viewRoles() {
    db.query('SELECT * FROM roles', function (err, results) {
        console.table(results);
});
}

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, 
// last names, job titles, departments, salaries, and managers that the employees report to
function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
})
};

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
