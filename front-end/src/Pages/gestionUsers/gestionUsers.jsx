import React from 'react'
import Navbar from '../../shared/components/navbar'
import Sidebar from '../../shared/components/sidebar'
import './gestionUsersStyles.css'
import {Link} from 'react-router-dom';
// import gestion from '../../assets/images-gestion-users/gestion-usuarios.png';

const gestionUsers = () => {
    const name = 'Administrador 01'
    return (
        <div className='profile'>
            <Navbar userName={name}></Navbar>
            <Sidebar></Sidebar>
            <main className='user-container'>
                <h2>Gestión de usuarios</h2>
                {/* <img src={gestion} alt="Gestión de usuarios" id="img-registro-exitoso" /> */}
                <div className="contact_form">
                    <div className="formulario">
                        <form id="form-gestion-usuarios" method="get" autocomplete="off">
                            <p className="p-users">
                                <label for="Cedula de usuario" className="labelGU">Cédula del usuario
                                    <span className="obligatorio">*</span>
                                </label>
                                <input type="text" name="introducir_nombre" id="nombre" required="obligatorio"
                                    placeholder="Ingrese cédula del usuario" />
                            </p>

                            <p className="p-users">
                                <label for="Nombre del usuario" className="labelGU">Nombre del usuario
                                    <span className="obligatorio">*</span>
                                </label>
                                <input type="text" name="introducir_nombre" id="nombre" required="obligatorio"
                                    placeholder="Ingrese nombre del usuario" />
                            </p>

                            <label className=" labelGU">Registre estado del usuario
                                <span className="obligatorio">*</span>
                            </label>
                            <br />
                            <br />
                            <div className="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" for="inlineCheckbox1">Pendiente</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                <label className="form-check-label" for="inlineCheckbox2">Autorizado</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                <label className="form-check-label" for="inlineCheckbox3">No autorizado</label>
                            </div>

                            <br />
                            <br />

                            <Link to='/exitoRegUsers'>
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

export default gestionUsers


            