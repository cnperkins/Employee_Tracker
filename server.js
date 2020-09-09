var inquirer = require("inquirer");
var db = require("./db");
db.connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});


function addDepartment() {
    inquirer.prompt({
        name: "department_name",
        type: "input",
        message: "What is the new department name?"
    }).then(answers => {
        console.log(answers)
        db.create_new_department(answers.department_name).then(res => {
            runSearch()
        })
    })
}

function addRole() {
    inquirer.prompt([
        {
            name: "role_title",
            type: "input",
            message: "What is the new role title?"
        }.then(answers => {
            console.log(answers)
            db.create_new_department(answers.role_title)
        }),

        {
            name: "role_salary",
            type: "input",
            message: "What is the new role salary?"
        }.then(answers => {
            console.log(answers)
            db.create_new_department(answers.role_salary)
        }),

        {
            name: "role_department",
            type: "input",
            message: "What is the new role department?"
        }.then(answers => {
            console.log(answers)
            db.create_new_role(answers.role_department)
        }),


        {
            name: "role_department_id",
            type: "input",
            message: "What is the new role department id?"
        }.then(answers => {
            console.log(answers)
            db.create_new_department(answers.role_department_id).then(res => {
                runSearch();
            })
        })
    ])
}


function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Add department",
                "Add role",
                "Add employee",
                "View departments",
                "View roles",
                "View employees",
                "Update employee role",
                "Exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "Add department":
                    addDepartment();
                    break;

                case "Add role":
                    addRole();
                    break;

                case "Add employee":
                    addEmployee();
                    break;

                case "View departments":
                    db.get_all_from_table("department").then(res => {
                        console.log(res)
                        runSearch()
                    })
                    break;

                case "View roles":
                    db.get_all_from_table("role").then(res => {
                        console.log(res)
                        runSearch()
                    })
                    break;

                case "View employees":
                    db.get_all_from_table("employee").then(res => {
                        console.log(res)
                        runSearch()
                    })
                    break;

                case "Update employee role":
                    updateEmployeeRole();
                    break;

                case "Exit":
                    db.connection.end();
                    break;
            }
        });
}


