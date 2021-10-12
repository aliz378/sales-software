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
app.get("/get-users", async (req,res) =>{
    const [rows, fildes] = await connection.execute("SELECT * FROM usuarios");
    res.json({data: rows});
})
app.post("/add-user", async (req,res) =>{
    const [nombre, cedula , email, rol, estado] = req.body;
    await connection.execute(`INSERT INTO usuarios (nombre, cedula, email, rol, estado) VALUES ('${nombre}', '${cedula}','${email}','${rol}','${estado}')`);
})
app.put("/update-user", (req,res) =>{
    const user = req.body;
    console.log(user.name);
    res.json(user);
})
app.delete("/delete-user", (req,res) =>{
    const user = req.body;
    console.log(user.name);
    res.json(user);
})
app.listen(port, async () =>{
    connection = await mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password: 'mintic',
        database: 'perfumeria',
        Promise: bluebird
    });
    console.log("Server runing on port: " + port);
});
