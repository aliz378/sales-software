import React, { Fragment } from 'react';
import Navbar from '../../shared/components/navbar';
import Sidebar from '../../shared/components/sidebar';
//import icono from '../../assets/images/icons8-usuario-femenino-en-círculo-48 1.png'

//import Aside from '../SharedComponents/aside/Aside'
import './MaestroProducto.css';

function MaestroProducto() {
    let name2 = 'Admon2'
    return (
        <div className = 'MaestroProducto'>
            <Navbar username = {name2}></Navbar>
            <Sidebar></Sidebar>
            //CONTENEDOR GRIS
            <div className = "registro" >
            <div className = "col-8 columna-derecha">
            
            <div className="container campo-datos">
              <div>
                <h1 id = "registroProducto" >MAESTRO DE PRODUCTO</h1>
                
              </div>
              </div>

           /
            
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Valor Unitario (COP)</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">P0001</th>
                    <td>Calvin Klein</td>
                    <td>Disponible</td>
                    <td>700.000</td>
                    <td><div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="buttonMaestro">Ver</button>
                        <button type="button" className="buttonMaestro">Editar</button>
                        <button type="button" className=" buttonMaestro">Eliminar</button>
                    </div></td>
                </tr>
                <tr>
                    <th scope="row">P0002</th>
                    <td>Nautica</td>
                    <td>Agotado</td>
                    <td>460.000</td>
                    <td><div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="buttonMaestro">Ver</button>
                        <button type="button" className="buttonMaestro">Editar</button>
                        <button type="button" className=" buttonMaestro">Eliminar</button>
                    </div></td>
                </tr>
                <tr>
                <th scope="row">P0003</th>
                    <td>Paco Rabanne</td>
                    <td>Disponible</td>
                    <td>670.000</td>
                    <td><div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="buttonMaestro">Ver</button>
                        <button type="button" className="buttonMaestro">Editar</button>
                        <button type="button" className=" buttonMaestro">Eliminar</button>
                    </div></td>
                </tr>
            </tbody>
        </table>
        //     </div>
        // </div>
        // </div>
    // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>  
           
            
            

            

        
    );
}

export default MaestroProducto;