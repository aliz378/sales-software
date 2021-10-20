import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import logoutIcon from '../../assets/images/logout.png';
import './sidebarStyles.css'

const Sidebar = () => {
    const { logout } = useAuth0();
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
                <Link to='/productos'  style={{ textDecoration: 'none' }} >
                    <ol> Registro de productos </ol>
                </Link>
                <Link to='/MaestroProductos'  style={{ textDecoration: 'none' }} >
                    <ol> Maestro de productos </ol>
                </Link>
                <Link to='/RegistroVentas'  style={{ textDecoration: 'none' }} >
                <ol> Registro de ventas </ol>
                </Link>
                <Link to='/MaestroVentas'  style={{ textDecoration: 'none' }} >
                    <ol> Maestro de ventas </ol>
                </Link>
                <Link to='/main' style={{ textDecoration: 'none' }}>
                    <ol> Perfil </ol>
                </Link>
            </ul>
            <Link to='/'>
                <button type="button" className="btn logout" onClick={() => logout({ returnTo: window.location.origin })}>
                <img src={logoutIcon} alt="logout"></img> Cerrar Sesión</button>
            </Link>
        </div>
    )
}

export default Sidebar
