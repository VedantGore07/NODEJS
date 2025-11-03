const conn = require('./db');


function getAllEmployees(req, res) {
  conn.query('select * from employee', (err, rows) => {
    if (err) throw err;
        res.json(rows);
  });
}


function getEmployeeById(req, res) {
  const id = req.params.id;
  conn.query('select * from employee where empid = ?', [id], (err, rows) => {
    if (err) throw err;
        res.send(rows);
  });
}


function addEmployee(req, res) {
  const { empId, empName, empExperience, empDesignation, empSalary } = req.body;
  conn.query(
    'insert into employee VALUES (?, ?, ?, ?, ?)',
    [empId, empName, empExperience, empDesignation, empSalary],
    (err) => {
      if (err) throw err;
      res.send('employee added successfully');
    }
  );
}



function updateEmployee(req, res) {
    const { empName, empExperience, empDesignation, empSalary, empId } = req.body;
    const sql = `
        UPDATE employee 
        SET empName = ?, empExperience = ?, empDesignation = ?, empSalary = ?
        WHERE empId = ?`;

    conn.query(sql, [empName, empExperience, empDesignation, empSalary, empId], (err) => {
        if (err) throw err;
        res.send("employee updated successfully");
    });
}



function deleteEmployee(req, res) {
    const id = req.params.id;
    conn.query('delete from employee where empId = ?', [id], (err) => {
        if (err) throw err;
        res.send('employee deleted successfully');
    });
}


module.exports = {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
};


