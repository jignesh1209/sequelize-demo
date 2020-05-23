const express = require('express');
const employee = require('./routes/employees');
const db = require('./models/index');

const app = express();
app.use(express.json())


app.get("/", (req, res) => {
    res.json({ message: "Welcome to MySql application." });
  });

app.use('/employee',employee);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
});