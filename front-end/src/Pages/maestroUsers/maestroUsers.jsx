import React, {useEffect, useState} from 'react';
import Navbar from '../../shared/components/navbar';
import Sidebar from '../../shared/components/sidebar';
import permission from '../../assets/images/permiso.jpg';
import { useAuth0 } from '@auth0/auth0-react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import './maestroUsersStyles.css';
import apiBaseUrl from '../../shared/utils/api';

const MaestroUsers = () => {
    const { user } = useAuth0();
    const [listUsuarios, setUsuarios] = useState([]);
    const [name, setName] = useState("");
    const [modalEditar, setModalEditar] = useState(false);
    const [permiso, setPermiso] = useState(false);
    const [usuario, setUsuario] = useState({
        nombre:'',
        email:'',
        telefono:0,           
        rol:'',
        estado:''
    });
    const selectUser= (element,action) =>{
        if(action === 'editar'){
            usuario.email = element.email;
            setModalEditar(true);
        }
        if(action === 'eliminar')funcionEliminar(element);
    }

    const getInfo = async () => {
        try{
            const response = await fetch(`${apiBaseUrl}/auth?email=${user.email}`);
            const jsonResponse = await response.json();
            const userData = jsonResponse.data;
            setName(userData.nombre);
            if(userData.rol === 'administrador') setPermiso(true);
        }catch(e){console.log(e);}
    }
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUsuario((prevState) =>({
            ...prevState,
            [name]: value
        }))
    } 
    const funcionEditar = async()=>{
        await fetch(`${apiBaseUrl}/update-user`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            nombre:usuario.nombre,
            telefono:usuario.telefono,
            email:usuario.email,            
            rol:usuario.rol,
            estado:usuario.estado 
        })});
        setModalEditar(false);
        getUsarios();
    }
    const funcionEliminar = async(e)=>{
        await fetch(`${apiBaseUrl}/delete-user`,{
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
        body: JSON.stringify({
            email:e.email, 
        })}).catch( error => {
            console.error(`fetch operation failed: ${error.message}`);
        });
        getUsarios();
    }
    
    const getUsarios = async () => {
        try {
            const response = await fetch(`${apiBaseUrl}/get-users`);
            const jsonResponse = await response.json();
            const responseProducts = jsonResponse.data;
            const listUsuario = responseProducts.map((usuario) =>
                <tr>
                    <th scope="row">{usuario.id}</th>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.estado}</td>
                    <td>{usuario.telefono}</td>
                    <td>{usuario.rol}</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                <Button type="button" className="buttonMaestro" onClick= {() =>selectUser(usuario,'editar')}>Editar</Button>
                <button type="button" className=" buttonMaestro" onClick= {() => selectUser(usuario,'eliminar')} > Eliminar</button>
            </div></td>
                </tr>
            );
            setUsuarios(listUsuario);
        }
        catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getUsarios();
        getInfo();
    },[name]);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='profile'>
            <Navbar userName={name}></Navbar>
            <Sidebar></Sidebar>        
            { (permiso === true) ? 
            <>
            <main className='maestro-container'>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">rol</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsuarios}
                    </tbody>
                </table>
            </div>
            </main>
            <Modal isOpen={modalEditar}>
                <ModalHeader>
                    Actualizar Usuario
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label> Nombre </Label>
                        <Input type="text" name="nombre" value={usuario.nombre} onChange={(e) => handleChange(e)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label> Estado </Label>
                        <Input type="text" name="estado" value={usuario.estado} onChange={(e) => handleChange(e)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label> Teléfono </Label>
                        <Input type="number" name="telefono" value={usuario.telefono} onChange={(e) => handleChange(e)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label> Rol </Label>
                        <Input type="text" name="rol" value={usuario.rol} onChange={(e) => handleChange(e)}/>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick= {() =>funcionEditar()}> Actualizar </Button>
                    <Button color="secundary" onClick= {() =>setModalEditar(false)}> Cancelar </Button>
                </ModalFooter>
            </Modal>
            </>
            :
            <>
            <main className='maestro-container'>
                <img src={permission} alt="Do not have permission" />
                <h2 id = "registroProductoP" >No tienes permiso en esta sección</h2>
            </main>
            </>}
        </div> 
    )
}

export default MaestroUsers
