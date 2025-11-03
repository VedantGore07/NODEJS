const express = require('express');
const app = express();
const emp = require('./employee');

app.use(express.json());


app.get('/app/employees', emp.getAllEmployees);

app.get('/app/employees/:id', emp.getEmployeeById);

app.post('/app/employees', emp.addEmployee);

app.put('/app/employees', emp.updateEmployee);

app.delete('/app/employees/:id', emp.deleteEmployee);


app.listen(3000, () => {
  console.log('Server running');
});

