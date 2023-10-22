import express from 'express';
import mysql from 'mysql';

const app = express();

// connect to prg381db database
const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "root123",
    database: "prg381db"

});

app.get('/', (req,res)=>{
    res.json({message: 'Welcome to the PRG381 project!'})
});


// GET all users
app.get('/users', (req,res)=>{
    const q = "SELECT * FROM users";
    db.query(q, (err, data)=>{
        if(err) return res.json(err);
        res.json(data)
    })
});

//  Add a new user
app.post('/users', (req,res)=>{
    
    const q = "INSERT INTO users (`email`,`password`) VALUES (?)";
    const values = ["backend@email","backend"];


    db.query( q, [values], (err, data)=>{
        if(err) return res.json(err);
        return res.json("data inserted successfully");
    })
});













app.listen(8800, () =>{
    console.log('Backend server is running! ')
})

