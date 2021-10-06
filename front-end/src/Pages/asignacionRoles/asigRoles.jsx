import React from 'react'
import Navbar from '../../shared/components/navbar'
import Sidebar from '../../shared/components/sidebar'
import './asigRolesStyles.css'

const mainPage = () => {
    const name = 'Administrador 01'
    return (
        <div className='profile'>
            <Navbar userName={name}></Navbar>
            <Sidebar></Sidebar>
            <main className='asigRol-container'>
                <div>
                    <h2>Asignación de roles</h2>
                    <div className="contact_form">
                        <div className="formulario">
                            <form id="form-gestion-usuarios" method="get" autocomplete="off">
                                <p className="p-users">
                                    <label for="Identificador de usuario" className="colocar_nombre">Identificador de usuario:
                                        <span className="obligatorio">*</span>
                                    </label>
                                    <input type="text" name="introducir_nombre" id="nombre" required="obligatorio"
                                        placeholder="Ingrese ID de usuario" />
                                </p>
                                <p className="p-users">
                                    <label for="Telefono del usuario" className="colocar_nombre">Teléfono del usuario
                                        <span className="obligatorio">*</span>
                                    </label>
                                    <input type="text" name="introducir_nombre" id="nombre" required="obligatorio"
                                        placeholder="Ingrese teléfono del usuario" />
                                </p>
                                <p className="p-users">
                                    <p>Registre estado del usuario</p>
                                    <input type="radio" value="Vendedor" /><label for="Vendedor">Vendedor</label>
                                    <input type="radio" value="Administrador" /><label for="Administrador">Administrador</label>               </p>

                                <button className = "buttonMaestro" type="submit" name="enviar_formulario" id="enviar">
                                    <p>Enviar</p>
                                </button>
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

export default mainPage

