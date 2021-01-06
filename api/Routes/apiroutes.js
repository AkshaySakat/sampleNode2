let express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const path = require('path');
const router = express.Router();

// middleware
app.use(express.static(path.join(__dirname, '../todo_frontend/dist')));

// Add employee
router.post('/addemp', async(req,res)=>{
    try {
        const allEmployee = await pool.query(`INSERT INTO employee (name,age,salary,created_on) values ('${req.body.name}', ${req.body.age},${req.body.salary}, NOW())`);
            let result = {
                status:200,
                message: 'Employee added successfully'
        }
        res.send(result)
    } catch (error) {
        res.send(error);
    }
});

// Getall Employees
router.get('/allemp', async(req, res) => {
    try {
      const allEmployee = await pool.query('select * from employee');
      result = allEmployee.rows;
        res.send(result); 
    } catch (error) {
        res.send(error);
    }
});

// Get Employee by id
router.get('/allemp/:id', async(req, res) => {
    try {
      const allEmployee = await pool.query(`select * from employee where empid= ${req.params.id}; `);
      result = allEmployee.rows;
        res.send(result); 
    } catch (error) {
        res.send(error);
    }
});

// Update employee
router.put('/updateemp', async(req,res)=>{
    try {
        const allEmployee = await pool.query(`update employee set name='${req.body.name}',age =${req.body.age},salary = ${req.body.salary} where empid = ${req.body.empid} `);
            let result = {
                status:200,
                message: 'Employee updated successfully'
        }
        res.send(result)
    } catch (error) {
        res.send(error);
    }
});

// Update employee
router.delete('/deleteemp', async(req,res)=>{
    try {
        const allEmployee = await pool.query(`delete from employee where empid= ${req.query.empid};  `);
            let result = {
                status:200,
                message: 'Employee deleted successfully'
        }
        res.send(result)
    } catch (error) {
        res.send(error);
    }
});


router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../todo_frontend/build/index.html'));
  });

  module.exports = router