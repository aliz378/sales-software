import React from 'react'
import Navbar from '../../shared/components/navbar'
import Sidebar from '../../shared/components/sidebar'
import './asigRolesStyles.css'
import {Link} from 'react-router-dom';

const mainPage = () => {
    const name = 'Administrador 01'
    return (
        <div className='profile'>
            <Navbar userName={name}></Navbar>
            <Sidebar></Sidebar>
            <main className='user-container'>
                <h2>Asignación de roles</h2>
                {/* <img src={gestion} alt="Gestión de usuarios" id="img-registro-exitoso" /> */}
                <div className="contact_forma">
                    <div className="formulario">
                        <form id="form-gestion-usuarios" method="get" autoComplete="off">
                            <p className="p-users">
                                <label htmlFor="ID de usuario" className="labelGU">ID del usuario
                                    <span className="obligatorio">*</span>
                                </label>
                                <input type="text" name="introducir_nombre" id="nombre" required="obligatorio"
                                    placeholder="Asigne ID del usuario" />
                            </p>

                            <p className="p-users">
                                <label htmlFor="ID del usuario" className="labelGU">Nombre del usuario
                                    <span className="obligatorio">*</span>
                                </label>
                                <input type="text" name="introducir_nombre" id="nombre" required="obligatorio"
                                    placeholder="Ingrese nombre del usuario" />
                            </p>
                            <p className="p-users">
                                <label htmlFor="Nombre del usuario" className="labelGU">Teléfono del usuario
                                    <span className="obligatorio">*</span>
                                </label>
                                <input type="text" name="introducir_nombre" id="nombre" required="obligatorio"
                                    placeholder="Ingrese teléfono del usuario" />
                            </p>

                            <label className=" labelGU">Registre estado del usuario
                                <span className="obligatorio">*</span>
                            </label>
                            <br />
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Vendedor</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Administrador</label>
                            </div>
                            <br />
                            <br />

                            <Link to='/exitoAsigRoles'>
                            <button className="buttonMaestro" type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>
                            </Link>  
                            <br />
                            <br />
                            <p className="aviso">
                                <span className="obligatorio"> * </span>los campos son obligatorios.
                            </p>
                        </form>
                    </div>
                </div>
            </main >
        </div >
    )
}

export default mainPage


