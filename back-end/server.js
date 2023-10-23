const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');



const app = express();
const port = 5000;

// Create a MySQL database connection
const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: 'password', 
  database: 'prj381', 
});

app.use(express.json());
app.use(cors());
app.use(cookieParser());


// API endpoint to log user in
app.post('/login', (req, res) => {
  const q = "SELECT * FROM users WHERE User_email = ?";
  
  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json({ error: "Internal Server Error" });

    if (data.length === 0) return res.status(404).json({error: "User not found"});

    const isPassword = req.body.password;  

    if(!(isPassword === data[0].User_password)) return res.status(400).json({error: "Wrong email or password"})
    
    const token = jwt.sign({id: data[0].User_id}, "jwtkey");
    const {User_password, ...other} = data[0];

    res.cookie("access_token", token, {httpOnly:true}).status(200).json(other);
  });
});


// API endpoint to create a new user
app.post('/signup', (req, res) => {
  // Check if the user already exists based on email
  const checkUserQuery = "SELECT * FROM users WHERE User_email = ?";
  db.query(checkUserQuery, [req.body.email], (checkErr, checkData) => {
    if (checkErr) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (checkData.length > 0) {
      return res.status(409).json({ error: 'User already exists!' });
    }

    // If the user does not exist, proceed with the insertion
    const insertUserQuery = "INSERT INTO users (User_email, User_password) VALUES (?, ?)";
    const values = [
      req.body.email,
      req.body.password
    ];
 
    db.query(insertUserQuery, values, (insertErr, insertData) => {
      if (insertErr) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      return res.status(200).json({ message: 'User has been created.' });
    });
  });
});

//API endpoint to log user out
app.post('/logout', (req, res) => {
  res.clearCookie("access_token", {
    sameSite:"none",
    secure:true
  }).status(200).json("User has been logged out.")
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
