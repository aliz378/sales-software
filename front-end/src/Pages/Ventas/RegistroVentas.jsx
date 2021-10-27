import React, { useState, useEffect } from 'react';
import Navbar from '../../shared/components/navbar'
import { useAuth0 } from '@auth0/auth0-react';
import Sidebar from '../../shared/components/sidebar'
import './RegistoVenta.css';


const RegistroVentas = () => {
  const { user } = useAuth0();
  const [name, setName] = useState("");
  
//   const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [total,setTotal] = useState(0);
  const [idProducto,setIdProducto] = useState(0);
  const [client,setClient] = useState("");
  const [idClient,setIdClient] = useState(0);
  const [salesManage,setSalesManager] = useState("");

  const getInfo = async () => {
    try{
      const response = await fetch(`http://localhost:3001/auth?email=${user.email}`);
      const jsonResponse = await response.json();
      const userData = jsonResponse.data;
      setName(userData.nombre);
      //if(userData.rol === 'administrador') setPermiso(true);
    }catch(e){console.log(e);}
  }

  const addSale = async ()=>{
    const userData ={
        // id:,
        fecha: date,
        total: total,
        idProducto: idProducto,
        cliente: client,
        idCliente: idClient,
        encargado: salesManage
    }
    const response = await fetch(`http://localhost:3001/add-sale`, {
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
    <div className='profile'>
    <Navbar userName={name}></Navbar>
    <Sidebar></Sidebar>
    <main className='maestro-container'>
    <div className="container">
    <div className="contact_forma">
      <div className="formulario">
        <form id="form-gestion-usuarios" method="get" autoComplete="off">

          <p>
            <label htmlFor="Nombre del usuario" className="colocar_nombre">Fecha
              <span className="obligatorio">*</span>
            </label>
              <input type="date" name="introducir_nombre" id="nombre" required="obligatorio" 
              placeholder="Ingrese una descripción del producto" value={date} onChange={(e) => setDate(e.target.value)}/>
          </p>
          <p>
            <label htmlFor="Nombre del usuario" className="colocar_nombre">Total
              <span className="obligatorio">*</span>
            </label>
              <input type="number" name="introducir_nombre" id="nombre" required="obligatorio" 
              placeholder="Ingrese una descripción del producto" value={total} onChange={(e) => setTotal(e.target.value)}/>
          </p>
          <p>
            <label htmlFor="Nombre del usuario" className="colocar_nombre">Id Producto
              <span className="obligatorio">*</span>
            </label>
              <input type="number" name="introducir_nombre" id="nombre" required="obligatorio" 
              placeholder="Ingrese una descripción del producto" value={idProducto} onChange={(e) => setIdProducto(e.target.value)}/>
          </p>
          <p>
            <label htmlFor="Nombre del usuario" className="colocar_nombre">Cliente
              <span className="obligatorio">*</span>
            </label>
              <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" 
              placeholder="Ingrese una descripción del producto" value={client} onChange={(e) => setClient(e.target.value)}/>
          </p>
          <p>
            <label htmlFor="Nombre del usuario" className="colocar_nombre">Id Cliente
              <span className="obligatorio">*</span>
            </label>
              <input type="number" name="introducir_nombre" id="nombre" required="obligatorio" 
              placeholder="Ingrese una descripción del producto" value={idClient} onChange={(e) => setIdClient(e.target.value)}/>
          </p>
          <p>
            <label htmlFor="Nombre del usuario" className="colocar_nombre">Encargado
              <span className="obligatorio">*</span>
            </label>
              <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" 
              placeholder="Ingrese una descripción del producto" value={salesManage} onChange={(e) => setSalesManager(e.target.value)}/>
          </p>
          
          <button className="buttonMaestro" type="button" onClick={addSale}  name="enviar_formulario" id="enviar">
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
  )
}

export default RegistroVentas