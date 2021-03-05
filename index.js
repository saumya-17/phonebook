const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = 3000;

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'phonebookDB'
});

mysqlConnection.connect((err)=>{
    if(!err)
        console.log('DB connection succeeded');
    else
        console.log('DB connection failed \n Error : '+err);
});

app.listen(port, ()=>console.log(`Express server is running at port ${port}`));

app.get('/', (res,req)=>{
    mysqlConnection.query('SELECT CONTACTNAME FROM CONTACTDETAILS', (err, rows, fields)=>{
        if(!err)
            console.log(rows);
        else
            console.log(err);
    });
})