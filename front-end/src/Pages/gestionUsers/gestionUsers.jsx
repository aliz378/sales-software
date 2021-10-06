import React from 'react'
import Navbar from '../../shared/components/navbar'
import Sidebar from '../../shared/components/sidebar'
import './gestionUsersStyles.css'

const gestionUsers = () => {
    const name = 'Administrador 01'
    return (
        <div className='profile'>
            <Navbar userName={name}></Navbar>
            <Sidebar></Sidebar>
            <main className='user-container'>
            <h2>Gestión de usuarios</h2>
            <div className="contact_form">
            <div className="formulario">
            <form id="form-gestion-usuarios" method="get" autocomplete="off">
            <p className = "p-users">
            <label for="Cedula de usuario" className ="colocar_nombre">Cédula del usuario
            <span className ="obligatorio">*</span>
            </label>
            <input type ="text" name="introducir_nombre" id="nombre" required="obligatorio"
            placeholder="Ingrese cédula del usuario"/>
            </p>
            <p className = "p-users">
            <label for="Nombre del usuario" className ="colocar_nombre">Nombre del usuario
            <span className ="obligatorio">*</span>
            </label>
            <input  type ="text" name="introducir_nombre" id="nombre" required="obligatorio"
            placeholder="Ingrese nombre del usuario"/>
            </p>
            <p className = "p-users">
            <p className = "p-users">Registre estado del usuario</p>
            <input type ="radio" value="Pendiente"/><label for="Pendiente">Pendiente</label>
            <input type ="radio" value="Autorizado"/><label for="Autorizado">Autorizado</label>
            <input type ="radio" value="No autorizado"/><label for="No autorizado">No autorizado</label>
            </p>

            <button className = "buttonMaestro" type ="submit" name="enviar_formulario" id="enviar">
            <p>Enviar</p>
            </button>
            <p className ="aviso">
            <span className ="obligatorio"> * </span>los campos son obligatorios.
            </p>
            </form>
            </div>
            </div>
            </main >         
        </div >
    )
}

export default gestionUsers

