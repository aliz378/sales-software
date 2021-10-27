import React, {useEffect, useState} from 'react';
import Navbar from '../../shared/components/navbar'
import Sidebar from '../../shared/components/sidebar'
import { useAuth0 } from '@auth0/auth0-react'; 
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap'; 
import './MaestroVentas.css';
import apiBaseUrl from '../../shared/utils/api';

const MaestroVentas = () => {
    const { user } = useAuth0();
    const [listSales, setSales] = useState([]);
    const [name, setName] = useState("");
    const [modalEditarV, setModalEditarV] = useState(false);
    const [sale, setSale] = useState({
        id: 0,
        fecha: '',
        total: 0,
        idProducto: 0,
        cliente: '',
        idCliente: '',
        encargado: ''
    });

    const selectSale= (element,action) =>{
        if(action === 'editar'){
            sale.id = element.id;
            setModalEditarV(true);
        }
        if(action === 'eliminar')funcionEliminarV(element);
    }

    const getInfo = async () => {
        try{
             const response = await fetch(`${apiBaseUrl}/auth?email=${user.email}`);
             const jsonResponse = await response.json();
             const userData = jsonResponse.data;
             setName(userData.nombre);
             //if(userData.rol === 'administrador') setPermiso(true);
         }catch(e){console.log(e);}
    }

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setSale((prevState) =>({
            ...prevState,
            [name]: value
        }))
    } 
    const getSale = async () => {
        try {
            const response = await fetch(`${apiBaseUrl}/get-sales`);
            const jsonResponse = await response.json();
            const responseProducts = jsonResponse.data;
            const listSales = responseProducts.map((sale) =>
                <tr>
                    <th scope="row">{sale.id}</th>
                    <td>{sale.fecha}</td>
                    <td>{sale.total}</td>
                    <td>{sale.idProducto}</td>
                    <td>{sale.cliente}</td>
                    <td>{sale.idCliente}</td>
                    <td>{sale.encargado}</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                <Button type="button" className="buttonMaestro" onClick= {() =>selectSale(sale,'editar')}>Editar</Button>
                <button type="button" className=" buttonMaestro" onClick= {() => selectSale(sale,'eliminar')} > Eliminar</button>
            </div></td>
                </tr>
            );
            setSales(listSales);
        }
        catch (error) {
            console.log(error)
        }

    }
    const funcionEditarV = async()=>{
        await fetch(`${apiBaseUrl}/update-sale`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: sale.id,
            fecha: sale.fecha,
            total: sale.total,
            idProducto: sale.idProducto,
            cliente: sale.cliente,
            idCliente: sale.idCliente,
            encargado: sale.encargado
        })});
        setModalEditarV(false);
        getSale();
    }
    const funcionEliminarV = async(e)=>{
        await fetch(`${apiBaseUrl}/delete-sale`,{
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
        body: JSON.stringify({
            id:e.id, 
        })}).catch( error => {
            console.error(`fetch operation failed: ${error.message}`);
        });
        getSale();
    }
    useEffect(() => {
        getSale();
        getInfo();
    },[name]);// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className='profile'>
            <Navbar userName={name}></Navbar>
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
                    <th scope="col">Fecha</th>
                    <th scope="col">Valor Total</th>
                    <th scope="col">ID Producto</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">ID Cliente</th>
                    <th scope="col">Encargado Venta</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {listSales}
            </tbody>
            </table>
        </div> 
        <Modal isOpen={modalEditarV}>
            <ModalHeader>
                Actualizar Ventas
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label> Fecha </Label>
                    <Input type="date" name="fecha" value={sale.fecha} onChange={(e) => handleChange(e)}/>
                </FormGroup>
                <FormGroup>
                    <Label> Valor Total </Label>
                    <Input type="number" name="total" value={sale.total} onChange={(e) => handleChange(e)}/>
                </FormGroup>
                <FormGroup>
                    <Label> ID Producto </Label>
                    <Input type="number" name="idProducto" value={sale.idProducto} onChange={(e) => handleChange(e)}/>
                </FormGroup>
                <FormGroup>
                    <Label> Cliente </Label>
                    <Input type="text" name="cliente" value={sale.cliente} onChange={(e) => handleChange(e)}/>
                </FormGroup>
                <FormGroup>
                    <Label> ID Cliente </Label>
                    <Input type="number" name="idCliente" value={sale.idCliente} onChange={(e) => handleChange(e)}/>
                </FormGroup>
                <FormGroup>
                    <Label> Encargado Venta </Label>
                    <Input type="text" name="encargado" value={sale.encargado} onChange={(e) => handleChange(e)}/>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick= {() =>funcionEditarV()}> Actualizar </Button>
                <Button color="secundary" onClick= {() =>setModalEditarV(false)}> Cancelar </Button>
            </ModalFooter>
        </Modal>
        </div> 
        )   
    } 

    export default MaestroVentas