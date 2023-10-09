const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


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

// API endpoint to fetch all users
app.get('/users', (req, res) => {
  const q = "SELECT * FROM users"
  db.query(q, (err, data) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(data);
  });
});

// API endpoint to create a new user
app.post('/users', (req, res) => {
  const q = "INSERT INTO users (User_email, User_password) VALUES (?)";
  const values = [
    req.body.email,
    req.body.password
  ];
  if (!values) {
    res.status(400).json({ error: 'Text is required' });
    return;
  }

  db.query(q, [values], (err, result) => {
    if (err) {
      console.error('Error creating todo:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json({ message: 'User created successfully', id: result.insertId });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
