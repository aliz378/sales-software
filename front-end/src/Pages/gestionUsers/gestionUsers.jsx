import React from 'react'
import Navbar from '../../shared/components/navbar'
import Sidebar from '../../shared/components/sidebar'
import './gestionUsersStyles.css'
import {Link} from 'react-router-dom';
// import gestion from '../../assets/images-gestion-users/gestion-usuarios.png';

const gestionUsers = () => {
    // const [rol, setRol] = useState("");
    const name = 'Administrador 01'

    return (
        <div className='profile'>
            <Navbar userName={name}></Navbar>
            <Sidebar></Sidebar>
            <main className='user-container'>
                <h2>Gestión de usuarios</h2>
                {/* <img src={gestion} alt="Gestión de usuarios" id="img-registro-exitoso" /> */}
                <div className="contact_formg">
                    <div className="formulario">
                        <form id="form-gestion-usuarios" method="get" autoComplete="off">
                            {/* <p className="p-users">
                                <label htmlFor="Cedula de usuario" className="labelGU">Cédula del usuario
                                    <span className="obligatorio">*</span>
                                </label>
                                <input type="text" name="introducir_nombre" id="nombre" required="obligatorio"
                                    placeholder="Ingrese cédula del usuario" />
                            </p> */}

                            <p className="p-users">
                                <label htmlFor="Nombre del usuario" className="labelGU">Nombre del usuario
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
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Pendiente</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Autorizado</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">No autorizado</label>
                            </div>
                              {/* <p className="p-users">
                                <label htmlFor="Rol del usuario" className=" labelGU">Asigne un rol al usuario
                                    <span className="obligatorio">*</span>
                                    <select value={rol} onChange={(e) => { setRol(e.target.value); }} name="rol_de_usuario" required
                                    >
                                        <option disabled value>Seleccione una opción</option>
                                        <option>Vendedor</option>
                                        <option>Administrador</option>
                                    </select>

                                </label>
                            </p>

                            <button className="buttonMaestro" type="submit" name="enviar_formulario" id="enviar">
                                <p>Enviar</p>
                            </button> */}

                            <br />
                            <br />
                            <p className="aviso">
                                <span className="obligatorio"> * </span>los campos son obligatorios.
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
                            </p>
                        </form>
                    </div>
                </div>
            </main >
        </div >
    )
}

export default gestionUsers


            