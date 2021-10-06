import React from 'react'
import { Link } from 'react-router-dom'
import logout from '../../assets/images/logout.png';
import './sidebarStyles.css'

const sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="logo">App</h2>
            <ul className="options">
            <Link to='/gestionUsers' style={{ textDecoration: 'none' }}>
                <ol> Gestión de usuarios </ol>
                </Link>
                <Link to='/maestroUsers' style={{ textDecoration: 'none' }}>
                <ol> Maestro de usuarios </ol>
                </Link>
                <ol> Registro de productos </ol>
                <ol> Maestro de productos </ol>
                <ol> Registro de ventas </ol>
                <ol> Maestro de ventas </ol>
                <Link to='/main' style={{ textDecoration: 'none' }}>
                    <ol> Perfil </ol>
                </Link>
            </ul>
            <Link to='/'>
            {/* <Link to='/rolerror'> */}
                <button type="button" className="btn btn-light">
                <img src={logout} alt="logout"></img> Cerrar Sesión</button>
            </Link>
        </div>
    )
}

export default sidebar
