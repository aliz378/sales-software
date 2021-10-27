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
    const [rows, fildes] = await connection.execute(`SELECT * FROM usuarios WHERE email='${email}'`).catch((e)=>console.log(e));
    res.json({data: rows[0]});
})
app.get("/get-users", async (req,res) =>{
    const [rows, fildes] = await connection.execute(`SELECT * FROM usuarios`).catch((e)=>console.log(e));
    res.json({data: rows});
})
app.post("/add-user", async (req,res) =>{
    const user = req.body;
    await connection.execute(`INSERT INTO usuarios (nombre, id, telefono, email, rol, estado) VALUES ('${user.nombre}',${user.id},${user.telefono},'${user.email}','${user.rol}','${user.estado}')`).catch((e)=>console.log(e));
    res.json(user);
    res.send("200");
})

app.put("/update-user", async(req,res) =>{
    const user = req.body;
    await connection.execute(`UPDATE usuarios SET nombre='${user.nombre}', telefono=${user.telefono}, rol='${user.rol}', estado='${user.estado}' WHERE email='${user.email}'`).catch((e)=>console.log(e));
    res.json(user);
})
app.delete("/delete-user", async (req,res) =>{
    const user = req.body;
    await connection.execute(`DELETE FROM usuarios WHERE email = '${user.email}'`).catch((e)=>console.log(e));
    res.json(user);
})

//Ventas

app.get("/get-sales", async (req,res) =>{
    const [rows, fildes] = await connection.execute(`SELECT * FROM ventas`).catch((e)=>console.log(e));
    res.json({data: rows});
})
app.post("/add-sale", async (req,res) =>{
    const sales = req.body;
    await connection.execute(`INSERT INTO ventas (fecha, total, idProducto, cliente, idCliente, encargado) VALUES ('${sales.fecha}',${sales.total},${sales.idProducto},'${sales.cliente}',${sales.idCliente},'${sales.encargado}')`).catch((e)=>console.log(e));
    res.json(sales);
    res.send("200");
})
app.put("/update-sale", async(req,res) =>{
    const sales = req.body;
    await connection.execute(`UPDATE ventas SET fecha='${sales.fecha}', total=${sales.total}, idProducto=${sales.idProducto}, cliente='${sales.cliente}', idCliente=${sales.idCliente}, encargado='${sales.encargado}' WHERE id='${sales.id}'`).catch((e)=>console.log(e));
    res.json(sales);
})
app.delete("/delete-sale", async (req,res) =>{
    const sales = req.body;
    await connection.execute(`DELETE FROM ventas WHERE id = '${sales.id}'`).catch((e)=>console.log(e));
    res.json(sales);
})

// Productos 
app.get("/get-products", async (req,res) =>{
    const [rows, fildes] = await connection.execute("SELECT * FROM productos").catch((e)=>console.log(e));
    res.json({data: rows});
})
app.post("/add-product", async (req) =>{
    const producto = req.body;
    await connection.execute(`INSERT INTO productos (descripcion, valorUnitario, estado) VALUES ('${producto.descripcion}', '${producto.valorUnitario}','${producto.estado}')`).catch((e)=>console.log(e));
})
app.put("/update-products", async(req,res) =>{
    const producto = req.body;
    await connection.execute(`UPDATE productos SET descripcion='${producto.descripcion}', valorUnitario=${producto.valorUnitario}, estado='${producto.estado}' WHERE idproductos='${producto.idproductos}'`).catch((e)=>console.log(e));
    res.json(producto);
})
app.delete("/delete-products", async(req,res) =>{
    const producto = req.body;
    await connection.execute(`DELETE FROM productos WHERE idproductos = '${producto.idproductos}'`).catch((e)=>console.log(e));
    res.json(producto);
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
