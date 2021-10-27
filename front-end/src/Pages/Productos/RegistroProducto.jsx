import React, { useState, useEffect } from 'react';
import Navbar from '../../shared/components/navbar';
import { useAuth0 } from '@auth0/auth0-react';
import Sidebar from '../../shared/components/sidebar';
import './RegistroProducto.css';
import apiBaseUrl from '../../shared/utils/api';

function RegistroProducto() {
  const { user } = useAuth0();
  const [name, setName] = useState("");
  
  // const [idProdructo,setIdProdructo] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState("");
  const [valorUnitario,setValorUnitario] = useState(0);

  const getInfo = async () => {
    try{
         const response = await fetch(`${apiBaseUrl}/auth?email=${user.email}`);
         const jsonResponse = await response.json();
         const userData = jsonResponse.data;
         setName(userData.nombre);
         //if(userData.rol === 'administrador') setPermiso(true);
     }catch(e){console.log(e);}
  }

  const addProduct = async ()=>{
    const userData ={
        // idProdructo: idProdructo,
        descripcion: descripcion,
        valorUnitario: valorUnitario,
        estado: estado
    }

    const response = await fetch(`${apiBaseUrl}/add-product`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    const jsonResponse = await response.json();
    console.log (jsonResponse);
}

useEffect(() => {
  getInfo();
},[name]);// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className = 'RegistroProducto'>
            <Navbar username = {name}></Navbar>
            <Sidebar></Sidebar>
            <main className='user-container'>
            <div className="container">
            <div className="contact_forma">
              <div className="formulario">
                <form id="form-gestion-usuarios" method="get" autoComplete="off">
                  <p>
                    <label htmlFor="Nombre del usuario" className="colocar_nombre">Descripción
                      <span className="obligatorio">*</span>
                    </label>
                      <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" 
                      placeholder="Ingrese una descripción del producto" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
                  </p>
                  <p>
                    <label htmlFor="Identificador de usuario" className="colocar_nombre">Valor Unitario(COP)
                      <span className="obligatorio">*</span>
                    </label>
                      <input type="number" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Ingrese el valor del producto por unidad"
                      value={valorUnitario} onChange={(e) => setValorUnitario(e.target.value)}/>
                  </p>   
                  <p>
                    <label htmlFor="Rol de usuario" className="colocar_mensaje">Estado
                      <span className="obligatorio">*</span>
                    </label>                     
                    <select name="rol" value={estado} onChange={(e) => setEstado(e.target.value)} required className="select">
                            <option disabled value>Selecciones una opción</option>
                            <option value=""></option>
                            <option value="disponible">Disponible</option>
                            <option value="agotado">Agotado</option>

                    </select>
                  </p>
                  <button className="buttonMaestro" type="button" onClick={addProduct}  name="enviar_formulario" id="enviar">
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
      </div>       
    );
}

export default RegistroProducto;