import React, {useEffect, useState} from 'react';
import Navbar from '../../shared/components/navbar';
import Sidebar from '../../shared/components/sidebar';
import { useAuth0 } from '@auth0/auth0-react'; 
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap'; 
import './MaestroProducto.css';

const MaestroProducto = () => {

    //ANEXADO EL JUEVES 21 DE OCTUBRE: SE DEBE ADAPTAR AL MAEESTRO DE PRODUCTOS:
    const { user } = useAuth0();
    const [listProductos, setProductos] = useState([]);
    const [name, setName] = useState("");
    const [modalEditarP, setModalEditarP] = useState(false);
    // const [permiso, setPermiso] = useState(false);
    const [producto, setProducto] = useState({
        idproductos: 0,
        descripcion: '',
        estado: '',
        valorUnitario: 0        
    });
    const selectUser= (element,action) =>{
        if(action === 'editar'){
            producto.idproductos = element.idproductos;
            setModalEditarP(true);
        }
        if(action === 'eliminar')eliminar(element);
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
                    <th scope="row">{producto.idproductos}</th>
                    <td>{producto.descripcion}</td>
                    <td>{producto.valorUnitario}</td>
                    <td>{producto.estado}</td>
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

    const editar = async()=>{
        await fetch(`http://localhost:3001/update-products`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            idproductos: producto.idproductos,
            descripcion: producto.descripcion,
            valorUnitario: producto.valorUnitario,
            estado: producto.estado
        })});
        setModalEditarP(false);
        getProducts();
    }
    const eliminar = async(e)=>{
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
    },[name]);// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className = 'MaestroProducto'>
            <Navbar username = {name}></Navbar>
            <Sidebar></Sidebar>
            <div className = "registro" >
            <div className="container campo-datosmp">
              <div>
                <h1 id = "registroProducto" >Maestro De Producto</h1>
                
              </div>
              </div>
            
        <table className="table">
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
            </tbody>
        </table>
        </div> 
        <Modal isOpen={modalEditarP}>
            <ModalHeader>
                Actualizar Producto
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label> Descripcion </Label>
                    <Input type="text" name="descripcion" value={producto.descripcion} onChange={(e) => handleChange(e)}/>
                </FormGroup>
                <FormGroup>
                    <Label> Valor Unitario </Label>
                    <Input type="number" name="valorUnitario" value={producto.valorUnitario} onChange={(e) => handleChange(e)}/>
                </FormGroup>
                <FormGroup>
                    <Label> Estado </Label>
                    <Input type="text" name="estado" value={producto.estado} onChange={(e) => handleChange(e)}/>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick= {() =>editar()}> Actualizar </Button>
                <Button color="secundary" onClick= {() =>setModalEditarP(false)}> Cancelar </Button>
            </ModalFooter>
        </Modal>
    </div>
    );
}

export default MaestroProducto;