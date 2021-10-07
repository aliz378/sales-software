import React from 'react'
import Navbar from '../../shared/components/navbar'
import Sidebar from '../../shared/components/sidebar'
import './maestroUsersStyles.css';

const maestroUsers = () => {
    const name = 'Administrador 01'
    return (
        <div className='profile'>
            <Navbar userName={name}></Navbar>
            <Sidebar></Sidebar>
            <main className='maestro-container'>
                <div>
                    <h2>Maestro de usuarios</h2>
                    <br />
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Rol</th>
                                <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">V001</th>
                                <td>Marcos Pérez</td>
                                <td>Vendedor</td>
                                <td><div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="buttonMaestro">Ver</button>
                                    <button type="button" className="buttonMaestro">Editar</button>
                                    <button type="button" className=" buttonMaestro">Eliminar</button>
                                </div></td>
                            </tr>
                            <tr>
                                <th scope="row">A101</th>
                                <td>Jacobo Hernánez</td>
                                <td>Administrador</td>
                                <td><div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="buttonMaestro">Ver</button>
                                    <button type="button" className="buttonMaestro">Editar</button>
                                    <button type="button" className=" buttonMaestro">Eliminar</button>
                                </div></td>
                            </tr>
                            <tr>
                                <th scope="row">Pendiente</th>
                                <td>Miguel Torres</td>
                                <td>Por asignar</td>
                                <td><div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="buttonMaestro">Ver</button>
                                    <button type="button" className="buttonMaestro">Editar</button>
                                    <button type="button" className=" buttonMaestro">Eliminar</button>
                                </div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>;
            </main>
        </div>
    )
}

export default maestroUsers

