import React, { useState, useEffect } from 'react';
import Navbar from '../../shared/components/navbar'
import Sidebar from '../../shared/components/sidebar'
import './gestionUsersStyles.css'
import { useAuth0 } from '@auth0/auth0-react';
import permission from '../../assets/images/permiso.jpg';

// import gestion from '../../assets/images-gestion-users/gestion-usuarios.png';

const GestionUsers = () => {
    const { user } = useAuth0();
    // const [listUsuarios, setUsuarios] = useState([]);
    const [name, setName] = useState("");
    const [permiso, setPermiso] = useState(false);
    
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState(0);
    const [rol,setRol] = useState("");
    const [estado, setEstado] = useState("")


    const addUsuario = async ()=>{
        const userData ={
            id:null,
            email:null,
            nombre: nombre,
            estado: estado,
            telefono: telefono,
            rol: rol
        }

        const response = await fetch(`http://localhost:3001/add-user`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const jsonResponse = await response.json();
        console.log (jsonResponse);
    }
   
    const getInfo = async () => {
        try{
            const response = await fetch(`http://localhost:3001/auth?email=${user.email}`);
            const jsonResponse = await response.json();
            const userData = jsonResponse.data;
            setName(userData.nombre);
            if(userData.rol === 'administrador') setPermiso(true);
        }catch(e){console.log(e);}
    }

    useEffect(() => {
        getInfo();
    },[name]);// eslint-disable-line react-hooks/exhaustive-deps



    return (
        <div className='profile'>
            <Navbar userName={name}></Navbar>
            <Sidebar></Sidebar>        
            { (permiso === true) ? 
            <>
            <main className='user-container'>
            <div className="container">
            <div className="contact_forma">
                    <div className="formulario">

                        <form id="form-gestion-usuarios" method="get" autoComplete="off">

                            <p className="p-users">
                                <label htmlFor="Nombre del usuario" className="labelGU">Nombre del usuario 
                                    <span className="obligatorio">*</span>
                                </label>
                                <input type="text" name="introducir_nombre" id="nombre" required="obligatorio"
                                    placeholder="Ingrese nombre del usuario" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                            </p>

                            <p className="p-users">
                                <label htmlFor="Estado del usuario" className=" labelGU">Registre estado del usuario 
                                    <span className="obligatorio">*</span>
                                    <select value={estado} onChange={(e) => setEstado(e.target.value)} name="estado_de_usuario" required className="select">
                                        <option disabled value>Selecciones una opción</option>
                                        <option value="pendiente">Pendiente</option>
                                        <option value="autorizado">Autorizado</option>
                                        <option value="no autorizado">No autorizado</option>

                                    </select>
                                </label>
                            </p>
                            <br />
                            <br />
                            <p className="p-users">
                                <label htmlFor="Telefono del usuario" className="labelGU">Teléfono del usuario 


                                    <span className="obligatorio">*</span>
                                </label>
                                <input type="number" name="introducir_telefono" id="nombre" required="obligatorio"
                                    placeholder="Ingrese teléfono del usuario"
                                    value={telefono} onChange={(e) => setTelefono(e.target.value)}
                                />
                            </p>
                            <br />
                            <p className="p-users">
                                <label htmlFor="Rol del usuario" className=" labelGU">Asigne un rol al usuario 
                                    <span className="obligatorio">*</span>
                                    <select value={rol} onChange={(e) => setRol(e.target.value)} name="rol_de_usuario" required className="select">
                                        <option value=""></option>
                                        <option value="adminstrador">Administrador</option>
                                        <option value="vendedor">Vendedor</option>
                                       
                                    </select>

                                </label>
                            </p>

                            <button className="buttonMaestro" type="button" onClick={addUsuario}  name="enviar_formulario" id="enviar">
                                <p>Enviar</p>
                            </button>

                            <br />
                            <br />
                            <p className="aviso">
                                <span className="obligatorio"> * </span>los campos son obligatorios.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            </main>
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
};


export default GestionUsers
