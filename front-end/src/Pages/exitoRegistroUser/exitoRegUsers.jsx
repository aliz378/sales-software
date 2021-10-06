import React from 'react'
import Navbar from '../../shared/components/navbar'
import Sidebar from '../../shared/components/sidebar'
import registro from '../../assets/images-gestion-users/registro-exitoso.png';
import './exitoRegUsersStyles.css'

const exitoRegUsers = () => {
    const name = 'Administrador 01'
    return (
        <div className='profile'>
            <Navbar userName={name}></Navbar>
            <Sidebar></Sidebar> 
            <main className='rolOk-container'>
                <img src={registro} alt="Autorización exitosa de usuario" id="img-registro-exitoso" />
                <h1>¡Autorización exitosa de usuario!</h1>
            </main>         
        </div>
    )
}

export default exitoRegUsers

