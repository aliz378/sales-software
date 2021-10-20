const express = require('express');
const cors = require('cors')
const mysql = require('mysql2/promise');
const app = express();
const port = 3001;
const bluebird = require('bluebird');
let connection;

app.use(express.json());
app.use(cors({origin: true}));

//Usuarios
app.get("/auth", async (req,res) =>{
    const email = req.query.email;
    const [rows, fildes] = await connection.execute(`SELECT * FROM usuarios WHERE email='${email}'`);
    res.json({data: rows[0]});
})
app.get("/get-users", async (req,res) =>{
    const [rows, fildes] = await connection.execute(`SELECT * FROM usuarios`);
    res.json({data: rows});
})
app.post("/add-user", async (req,res) =>{
    const user = req.body;
    await connection.execute(`INSERT INTO usuarios (nombre, id, telefono, email, rol, estado) VALUES ('${user.nombre}',${user.id},${user.telefono},'${user.email}','${user.rol}','${user.estado}')`);
    res.json(user);
    res.send("200");
})
app.put("/update-user", async(req,res) =>{
    const user = req.body;
    await connection.execute(`UPDATE usuarios SET nombre='${user.nombre}', telefono=${user.telefono}, rol='${user.rol}', estado='${user.estado}' WHERE email='${user.email}'`);
    res.json(user);
})
app.delete("/delete-user", async (req,res) =>{
    const user = req.body;
    await connection.execute(`DELETE FROM usuarios WHERE email = '${user.email}'`);
    res.json(user);
})

//Ventas

app.get("/get-users", async (req,res) =>{
    const [rows, fildes] = await connection.execute(`SELECT * FROM usuarios`);
    res.json({data: rows});
})
app.post("/add-user", async (req,res) =>{
    const user = req.body;
    await connection.execute(`INSERT INTO usuarios (nombre, id, telefono, email, rol, estado) VALUES ('${user.nombre}',${user.id},${user.telefono},'${user.email}','${user.rol}','${user.estado}')`);
    res.json(user);
    res.send("200");
})
app.put("/update-user", async(req,res) =>{
    const user = req.body;
    await connection.execute(`UPDATE usuarios SET nombre='${user.nombre}', telefono=${user.telefono}, rol='${user.rol}', estado='${user.estado}' WHERE email='${user.email}'`);
    res.json(user);
})
app.delete("/delete-user", async (req,res) =>{
    const user = req.body;
    await connection.execute(`DELETE FROM usuarios WHERE email = '${user.email}'`);
    res.json(user);
})
app.listen(port, async () =>{
    connection = await mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password: 'Polaco018*',
        database: 'perfumeria',
        Promise: bluebird
    });
    console.log("Server runing on port: " + port);
});