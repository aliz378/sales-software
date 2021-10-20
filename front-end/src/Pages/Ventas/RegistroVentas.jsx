import React from 'react'
import Navbar from '../../shared/components/navbar'
import Sidebar from '../../shared/components/sidebar'


const RegistroVentas = () => {
    const name = 'Administrador 01'
    return (
        <div className='profile'>
            <Navbar userName={name}></Navbar>
            <Sidebar></Sidebar>
            <main className='maestro-container'>
                <div>
                    <h2>Registro de Ventas</h2>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Usuario</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="user" value="Adminitrador01"/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">ID Cliente</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="IdCliente" placeholder="Número identificación Cliente"/>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Nombre del cliente</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="Nombre_CLiente" placeholder="Nombre o Razón Social Cliente"/>
                    </div>
                </div>
                <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Seleccione Producto</label>
                    <div class="col-sm-10">
                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Seleccione Producto"/>
                        <datalist id="datalistOptions">
                            <option value="Calvin Klein"/>
                            <option value="Nautica"/>
                            <option value="Paco Rabanne"/>
                        </datalist>

                        

                    </div>
                
                </div>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Cantidad </th>
      <th scope="col">Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Calvin Klein</td>
      <td>1</td>
      <td>$700.000</td>
    </tr>
    <tr>
      <th scope="row">VALOR TOTAL</th>
      <td></td>
      <td></td>
      <td>$700.000</td>
    </tr>
  </tbody>
</table>
                <button type="submit" name="crear_venta" id="send"><p>Crear Venta</p></button>    
            </main>
        </div>
    )
}

export default RegistroVentas