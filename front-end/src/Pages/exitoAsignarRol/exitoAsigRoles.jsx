import React from 'react'
import Navbar from '../../shared/components/navbar'
import Sidebar from '../../shared/components/sidebar'
import asignacion from '../../assets/images-gestion-users/autorizacion-exitosa.png';
import './exitoAsigRolesStyles.css'
import {Link} from 'react-router-dom';

const exitoAsigRoles = () => {
    const name = 'Administrador 01'
    return (
        <div className='profile'>
            <Navbar userName={name}></Navbar>
            <Sidebar></Sidebar> 
            <main className='rolOk-container'>
                <img src={asignacion} alt="Autorización exitosa de usuario" id="img-registro-exitoso" />
                <h1>¡Rol asignado exitosamente!</h1>
                <br />
                <br />

                <Link to='/maestroUsers'>
                    <button className="buttonMaestro" type="submit" name="enviar_formulario" id="Continuar"><p>Continuar</p></button>
                </Link>
            </main>         
        </div>
    )
}

export default exitoAsigRoles

