const express = require('express');
//const Employees = require('../models/employee');
const db = require('../models/index');
//const Employee = models.Employee;

// class EmployeeController {
//     getList(req, res) {
//         const result = Employee.findAll();
//         res.send(result);
//     }
// }
exports.getList = (req, res) => {
    console.log('controller');
   db.employee.findAll().then((result) => {
        res.json({ result });
   });
}

exports.InsertData = async (employeeObj,res) =>{
    const result = await db.employee.create(employeeObj);
    console.log(result);
    res.send(result);
}

exports.UpdateData = async (employeeObj,res) =>{
    const result = await db.employee.upsert(employeeObj);
    res.send(result);
}
