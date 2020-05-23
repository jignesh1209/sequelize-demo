const express = require('express');
const EmployeeController = require('../controller/employeeController');

const router = express.Router();

router.get('/getList', (req,res) => {
    console.log('called');
    EmployeeController.getList(req, res);
});

router.post('/insert',(req,res) =>{
    const Employee = {
        name: req.body.name,
        dept: req.body.dept
    }
    EmployeeController.InsertData(Employee,res);
});

router.put('/update',(req,res) =>{
    const Employee = {
        name: req.body.name,
        dept: req.body.dept,
        id: req.body.id
    }

    console.log(Employee);
    EmployeeController.UpdateData(Employee,res);
});

module.exports = router;


