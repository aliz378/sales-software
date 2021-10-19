const express = require('express');
const cors = require('cors')
const mysql = require('mysql2/promise');
const app = express();
const port = 3001;
const bluebird = require('bluebird');
let connection;

app.use(express.json());
app.use(cors({origin: true}));

app.get("/auth", async (req,res) =>{
    const email = req.query.email;
    const [rows, fildes] = await connection.execute(`SELECT * FROM usuarios WHERE email='${email}'`);
    res.json({data: rows[0]});
})

//Usuarios
app.get("/get-users", async (req,res) =>{
    const [rows, fildes] = await connection.execute("SELECT * FROM usuarios");
    res.json({data: rows});
})
app.post("/add-user", async (req) =>{
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

//Productos
app.get("/get-products", async (req,res) =>{
    const [rows, fildes] = await connection.execute("SELECT * FROM productos");
    res.json({data: rows});
})
app.post("/add-products", async (req) =>{
    const [descripcion, valorUnitario , estado, acciones] = req.body;
    await connection.execute(`INSERT INTO usuarios (descripcion, valorUnitario, estado, acciones) VALUES ('${descripcion}', '${valorUnitario}','${estado}','${acciones}')`);
})
app.put("/update-products", (req,res) =>{
    const user = req.body;
    console.log(user.name);
    res.json(user);
})
app.delete("/delete-products", (req,res) =>{
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

