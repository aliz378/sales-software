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
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState();
    const [rol,setRol] = useState("");
    const [estado, setEstado] = useState("")
    const [permiso, setPermiso] = useState(false);
   
    const getInfo = async () => {
        try{
            const response = await fetch(`http://localhost:3001/auth?email=${user.email}`);
            const jsonResponse = await response.json();
            const userData = jsonResponse.data;
            setName(userData.nombre);
            if(userData.rol === 'administrador') setPermiso(true);
        }catch(e){console.log(e);}
    }

/*     const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        // console.log(e.target.name,e.target.value)
        setUsuario((prevState) =>({
            ...prevState,
            [name]: value
        }))
    } */


    /*     ESTA PARTE DE CÓDIGO ESTÁ EN EL MAESTRO PERO NO SÉ SI SE DEBE TENER EN EL FORMULARIO PARA MANDAR LA INFORMACIÓN AL MAESTRO */
    // let usuario = {_id:'', name_user:'',state_user:'', phone_user:'', role_user:''};
        // const [listUsuarios, setUsuarios] = useState({
        //     _id: usuario._id,
        //     name: usuario.name_user,
        //     state: usuario.state_user,
        //     phone: usuario.phone_user,
        //     state: usuario.role_user
        //   });
        
        // const getUsuarios = async () => {
        //     try {
        //         const response = await fetch("http://localhost:3001/get-users");
        //         const jsonResponse = await response.json();
        //         const responseProducts = jsonResponse.data;
        //         console.log(responseProducts)
        //         const listUsuarios = responseProducts.map((usuario) =>
        //         );
        //         setUsuarios(listUsuarios)
        //     }
        //     catch (error) {
        //         console.log(error)
        //     }
    
        // }

        //         }

        useEffect(() => {
            // getUsarios();
            getInfo();
        },[name]);


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
                                        <option value="no">Pendiente</option>
                                        <option value="yes">Autorizado</option>
                                        <option value="no">No autorizado</option>

                                    </select>
                                </label>
                            </p>
                            <br />
                            <br />
                            <p className="p-users">
                                <label htmlFor="Telefono del usuario" className="labelGU">Teléfono del usuario 
                                    <span className="obligatorio">*</span>
                                </label>
                                <input type="text" name="introducir_telefono" id="nombre" required="obligatorio"
                                    placeholder="Ingrese teléfono del usuario"
                                    value={telefono} onChange={(e) => setTelefono(e.target.value)}
                                />
                            </p>
                            <br />
                            <p className="p-users">
                                <label htmlFor="Rol del usuario" className=" labelGU">Asigne un rol al usuario 
                                    <span className="obligatorio">*</span>
                                    <select value={rol} onChange={(e) => setRol(e.target.value)} name="rol_de_usuario" required className="select"
                                    >
                                        <option disabled value>Seleccione una opción</option>
                                        <option>Vendedor</option>
                                        <option>Administrador</option>
                                    </select>

                                </label>
                            </p>

                            <button className="buttonMaestro" type="submit" name="enviar_formulario" id="enviar">
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
