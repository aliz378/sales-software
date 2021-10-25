import React, {useEffect, useState} from 'react';
import Navbar from '../../shared/components/navbar';
import Sidebar from '../../shared/components/sidebar';
//import icono from '../../assets/images/icons8-usuario-femenino-en-círculo-48 1.png'
import { useAuth0 } from '@auth0/auth0-react'; // ANEXADO EL JUEVES 21 DE OCTUBRE, 2021
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap'; // ANEXADO EL JUEVES 21 DE OCTUBRE, 2021

//import Aside from '../SharedComponents/aside/Aside'
import './MaestroProducto.css';

const MaestroProducto = () => {

    //ANEXADO EL JUEVES 21 DE OCTUBRE: SE DEBE ADAPTAR AL MAEESTRO DE PRODUCTOS:
    const { user } = useAuth0();
    const [listProductos, setProductos] = useState([]);
    const [name, setName] = useState("");
    const [modalEditar, setModalEditar] = useState(false);
    // const [permiso, setPermiso] = useState(false);
    const [producto, setProducto] = useState({
        idproductos: 0,
        descripcion: '',
        valorUnitario: 0,
        estado: ''
    });
    const selectUser= (element,action) =>{
        if(action === 'editar'){
            producto.idproductos = element.idproductos;
            setModalEditar(true);
        }
        if(action === 'eliminar')funcionEliminar(element);
    }

    const getInfo = async () => {
        try{
             const response = await fetch(`http://localhost:3001/auth?email=${user.email}`);
             const jsonResponse = await response.json();
             const userData = jsonResponse.data;
             setName(userData.nombre);
             //if(userData.rol === 'administrador') setPermiso(true);
         }catch(e){console.log(e);}
     }

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setProducto((prevState) =>({
            ...prevState,
            [name]: value
        }))
    } 
    
    //jo
    
    // ANEXADO EL JUEVES 21 DE OCTUBRE
    const getProducts = async () => {
        try {
            const response = await fetch("http://localhost:3001/get-products");
            const jsonResponse = await response.json();
            const responseProducts = jsonResponse.data;
            const listProductos = responseProducts.map((producto) =>
                <tr>
                    <th scope="row">{producto.id}</th>
                    <td>{producto.nombre}</td>
                    <td>{producto.estado}</td>
                    <td>{producto.telefono}</td>
                    <td>{producto.rol}</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                <Button type="button" className="buttonMaestro" onClick= {() =>selectUser(producto,'editar')}>Editar</Button>
                <button type="button" className=" buttonMaestro" onClick= {() => selectUser(producto,'eliminar')} > Eliminar</button>
            </div></td>
                </tr>
            );
            setProductos(listProductos);
        }
        catch (error) {
            console.log(error)
        }

    }

    const funcionEditar = async()=>{
        await fetch(`http://localhost:3001/update-products`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            idproductos: producto.idproductos,
            descripcion: producto.descripcion,
            valorUnitario: producto.valorUnitario,
            estado: producto.estado
        })});
        setModalEditar(false);
        getProducts();
    }
    const funcionEliminar = async(e)=>{
        await fetch(`http://localhost:3001/delete-products`,{
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
        body: JSON.stringify({
            idproductos:e.idproductos, 
        })}).catch( error => {
            console.error(`fetch operation failed: ${error.message}`);
        });
        getProducts();
    }

    useEffect(() => {
        getProducts();
        getInfo();
    },[]);

    // ANEXADO EL JUEVES 21 DE OCTUBRE


    return (
        <div className = 'MaestroProducto'>
            <Navbar username = {name}></Navbar>
            <Sidebar></Sidebar>
            {/* //CONTENEDOR GRIS */}
            <div className = "registro" >
            {/* <div className = "col-8 columna-derecha"> */}
            
            <div className="container campo-datosmp">
              <div>
                <h1 id = "registroProducto" >Maestro De Producto</h1>
                
              </div>
              </div>
            
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Valor Unitario (COP)</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {listProductos}
                {/* <tr>
                    <th scope="row">P0001</th>
                    <td>Calvin Klein</td>
                    <td>Disponible</td>
                    <td>700.000</td>
                    <td><div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="buttonMaestro">Ver</button>
                        <button type="button" className="buttonMaestro">Editar</button>
                        <button type="button" className=" buttonMaestro">Eliminar</button>
                    </div></td>
                </tr>
                <tr>
                    <th scope="row">P0002</th>
                    <td>Nautica</td>
                    <td>Agotado</td>
                    <td>460.000</td>
                    <td><div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="buttonMaestro">Ver</button>
                        <button type="button" className="buttonMaestro">Editar</button>
                        <button type="button" className=" buttonMaestro">Eliminar</button>
                    </div></td>
                </tr>
                <tr>
                <th scope="row">P0003</th>
                    <td>Paco Rabanne</td>
                    <td>Disponible</td>
                    <td>670.000</td>
                    <td><div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="buttonMaestro">Ver</button>
                        <button type="button" className="buttonMaestro">Editar</button>
                        <button type="button" className=" buttonMaestro">Eliminar</button>
                    </div></td>
                </tr> */}
            </tbody>
        </table>
        </div> 
    </div>
        // </div> 
    // {/* // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>   */}
        
    );
}

export default MaestroProducto;