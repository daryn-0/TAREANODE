const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'bdnode'
});
connection.connect((err)=>{
    if(err) throw err;
        console.log("Conectado a bd MYSQL");
});

app.post('/posts', (req, res)=>{
    const {titulo, descripcion} = req.body;
    const query = 'INSERT INTO posts(titulo, descripcion) VALUES(?,?)';
    connection.query(query,[titulo,descripcion], (err, results)=>{
        if(err){
            console.log('Error al insertar post: ', err);
            return res.status(500).send('Error en el servidor');
        }
        res.status(201).send({id:results.inserId, titulo, descripcion});
    });
});

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});