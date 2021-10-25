const express = require('express');
const cors = require('cors')
const mysql = require('mysql2/promise');
const app = express();
const port = 3001;
const bluebird = require('bluebird');
let connection;

//Configura el servidor para redcibir datos en formato json

app.use(express.json());
app.use(cors({origin: true}));

app.set('port', process.env.PORT || port) //Agregad el domingo 24 de octubre de 2021_ ULTIMA SEMANA MINTIC -ciclo 03
app.get("/", (req, res) =>{ //Agregad el domingo 24 de octubre de 2021_ ULTIMA SEMANA MINTIC -ciclo 03
    res.json("Backend misiontic shop"); }) //Este nombre se debe ajustar5 después: no es el correcto.
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
// app.listen(port, async () =>{
//     connection = await mysql.createConnection({
//         host : 'localhost',
//         user : 'root',
//         password: 'root',
//         database: 'perfumeria',
//         Promise: bluebird
//     });
//     console.log("Server runing on port: " + port);
// });

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
app.listen(app get('port'), async () =>{
    // connection = await mysql.createConnection({
    //     host : 'localhost',
    //     user : 'root',
    //     password: 'Shingeky_2021',
    //     database: 'perfumeria',
    //     Promise: bluebird
    // });
    console.log("Server runing on port: " + app.get('port')); //Modificad hoy domingo 24 de octubre. Se comentaron las líneas 97 - 103
});

