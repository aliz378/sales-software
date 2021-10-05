import React, { Fragment } from 'react';
import Navbar from '../../shared/components/navbar';
import Sidebar from '../../shared/components/sidebar';
import icono from '../../assets/images/icons8-usuario-femenino-en-círculo-48 1.png'

//import Aside from '../SharedComponents/aside/Aside'
import './RegistroProducto.css';

function RegistroProducto() {
    let name = 'Admon1'
    return (
        <div className = 'RegistroProducto'>
            <Navbar username = {name}></Navbar>
            <Sidebar></Sidebar>
            <div className = "registro" >
            <div className = "col-8 columna-derecha">
            
            <div className="container campo-datos">
              <div>
                <h1 id = "registroProducto" >REGISTRO DE PRODUCTO</h1>
                
              </div>
              </div>

              <div className="contact_form"> 
                <div className="formulario">
                <form id="form-gestion-usuarios" method="get" autocomplete="off"> 
                  <p>
                    <label for="Identificador de usuario" className="colocar_nombre">Identificador de producto:
                      <span className="obligatorio">*</span>
                    </label>
                      <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Ingrese id de Producto"/>
                  </p>
                <p>
                    <label for="Nombre del usuario" className="colocar_nombre">Descripción
                      <span className="obligatorio">*</span>
                    </label>
                      <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Ingrese una descripción del producto"/>
                  </p>
                 

                    <p>
                      <label for="Rol de usuario" className="colocar_mensaje">Estado
                        <span className="obligatorio">*</span>
                      </label>                     
                      <select name="rol" required>
                          <option value="">Seleccione un rol</option>                
                          <option>Disponible</option>                
                          <option>Agotado </option>                
                          
                        </select>   

                    </p>         
                    <p>
                    <label for="Identificador de usuario" className="colocar_nombre">Valor Unitario(COP)
                      <span className="obligatorio">*</span>
                    </label>
                      <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Ingrese el valor del producto por unidad"/>
                  </p>         
                 
                    <button type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>
                     <p className="aviso">
                      <span className="obligatorio"> * </span>los campos son obligatorios.
                    </p>                 
                    </form>
                  </div>
                </div>
            </div>
        </div>  
           
            
            

            

        </div>
    );
}

export default RegistroProducto;