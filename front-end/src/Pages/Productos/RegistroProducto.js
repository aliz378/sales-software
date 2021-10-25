import React, {useEffect, useState} from 'react';
import Navbar from '../../shared/components/navbar';
import Sidebar from '../../shared/components/sidebar';
import { useAuth0 } from '@auth0/auth0-react';
import permission from '../../assets/images/permiso.jpg';
// import icono from '../../assets/images/icons8-usuario-femenino-en-círculo-48 1.png'

//import Aside from '../SharedComponents/aside/Aside'
import './RegistroProducto.css';

const RegistroProducto = () => {
    //let name = 'Administrador 01'

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

    useEffect(() => {
      // getUsarios();
      getInfo();
  },[name]);



    return (
        <div className = 'RegistroProducto'>
            <Navbar username = {name}></Navbar>
            <Sidebar></Sidebar>
            <div className = "registro" >
            {/* <div className = "col-8 columna-derecha"> */}
            
            <div className="container campo-datosa">
              <div>
                <h2 id = "registroProductoP" >Registro De Producto</h2>
                
              </div>
              </div>

              <div className="contact_formr"> 
                <div className="formulario">
                <form id="form-gestion-usuarios" method="get" autocomplete="off"> 
                  <p>
                    <label htmlFor="Identificador de usuario" className="colocar_nombre">Identificador de producto:
                      <span className="obligatorio">*</span>
                    </label>
                      <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Ingrese id de Producto"/>
                  </p>
                <p>
                    <label for="Nombre del usuario" className="colocar_nombre">Descripción
                      <span className="obligatorio">*</span>
                    </label>
                      <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Ingrese una descripción del producto"/>
                  </p>
                 

                    <p>
                      <label for="Rol de usuario" className="colocar_mensaje">Estado
                        <span className="obligatorio">*</span>
                      </label>                     
                      <select name="rol" required>
                          <option value="">Seleccione un rol</option>                
                          <option>Disponible</option>                
                          <option>Agotado </option>                
                          
                        </select>   

                    </p>         
                    <p>
                    <label for="Identificador de usuario" className="colocar_nombre">Valor Unitario(COP)
                      <span className="obligatorio">*</span>
                    </label>
                      <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Ingrese el valor del producto por unidad"/>
                  </p>         
                 
                    <button type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>
                     <p className="aviso">
                      <span className="obligatorio"> * </span>los campos son obligatorios.
                    </p>                 
                    </form>
                  </div>
                </div>
            </div>
        </div>  
        // </div>
    );
}

export default RegistroProducto;