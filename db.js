var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Peaches04$",
    database: "employee_trackerDB"
});

const get_all_from_table = (table_name) => {
    return new Promise(function (resolve, reject) {
        connection.query(`SELECT * FROM ${table_name}`, (err, results) => {
            if (err) {
                return reject(err)
            };

            return resolve(results);
        })
    })
}

const create_new_department = (department_name) => {
    return new Promise(function (resolve, reject) {
        connection.query(`INSERT INTO department (name) VALUES ("${department_name}")`, (err, results) => {

            if (err) {
                return reject(err)
            };
            return resolve(results);
        })
    })
}

const create_new_role = (role_title, role_salary, role_department, role_department_id) => {
    return new Promise(function (resolve, reject) {
        connection.query(`INSERT INTO role (title, salary, department, department_id)
        VALUES ("${role_title}", ${role_salary}, "${role_department}", ${role_department_id})`, (err, results) => {

            if (err) {
                return reject(err)
            };
            return resolve(results);
        })
    })
}

const getOneById = (table_name, id) => {
    return new Promise(function (resolve, reject) {
        connection.query(`SELECT * FROM ${table_name} WHERE id = ${id}`, (err, results) => {

            if (err) {
                return reject(err)
            };

            return resolve(results);
        })
    })
}



module.exports = {
    get_all_from_table, getOneById, create_new_department, create_new_role, connection
}
