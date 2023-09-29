import express from 'express';
import mysql from 'mysql';

const app = express();

// connect to prg381db database
const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "root123",
    database: "prg381db"

})

app.get('/', (req,res)=>{
    res.json({message: 'Welcome to the PRG381 project!'})
})

app.get('/users', (req,res)=>{
    const q = "SELECT * FROM users";
    db.query(q, (err, data)=>{
        if(err) return res.json(err);
        res.json(data)
    })
})



app.listen(8800, () =>{
    console.log('Backend server is running! ')
})
