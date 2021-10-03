import React from 'react'
import Navbar from '../../shared/components/navbar'
import Sidebar from '../../shared/components/sidebar'
import perfil from '../../assets/images/perfiles.jpg';
import './mainStyles.css'

const mainPage = () => {
    const name = 'Administrador 01'
    return (
        <div className='profile'>
            <Navbar userName={name}></Navbar>
            <Sidebar></Sidebar> 
            <main className='main-container'>
                <img src={perfil} alt="Profile" />
                <h1>{name}</h1>
                <div className='data'>
                    <ul className='tag'>
                        <ol>Identificador de Usuario</ol>
                        <ol>Rol</ol>
                        <ol>Estado</ol>                       
                    </ul>
                    <ul className='info'>
                        <ol>A0001</ol>
                        <ol>Administrador</ol>
                        <ol>Autorizado</ol>
                    </ul>
                </div>
            </main>         
        </div>
    )
}

export default mainPage

