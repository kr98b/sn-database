const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asdf1',
  database: 'prototype',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.post('/submitEstudianteForm', (req, res) => {
  const { nombre, correo, usuario, semestre, universidad, carrera, boleta } = req.body;

  const query = `INSERT INTO estudiantes (e_nombre, e_correo, e_user, e_semestre, e_escuela, e_carrera, e_boleta) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(query, [nombre, correo, usuario, semestre, universidad, carrera, boleta], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ message: 'Error inserting data:', err });
    }
    res.status(200).json({ message: 'Data inserted successfully', id: result.insertId });
  });
});

app.post('/submitDocenteForm', (req, res) => {
  const { nombre, correo, usuario, area, universidad, campus, asignatura } = req.body;

  const query = `INSERT INTO docente (d_nombre, d_correo, d_user, d_area, d_universidad, d_campus, d_asignatura) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(query, [nombre, correo, usuario, area, universidad, campus, asignatura], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ message: 'Error inserting data:', err });
    }
    res.status(200).json({ message: 'Data inserted successfully', id: result.insertId });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
