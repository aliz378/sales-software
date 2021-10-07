import React from 'react'
import Navbar from '../../shared/components/navbar'
import Sidebar from '../../shared/components/sidebar'
import './MaestroVentas.css';

const MaestroVentas = () => {
    const name = 'Administrador 01'
    return (
        <div className='profile'>
            <Navbar userName={name}></Navbar>
            <Sidebar></Sidebar>
            <main className='maestro-container'>
                <div>
                    <h2>Maestro de Ventas</h2>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <img src="..." class="card-img-top" alt="Paco Rabanne"/>
                                    <h5 class="card-title">ID Venta 001</h5>
                                    <p class="card-text">Fecha:  YYYY-MM-DD        </p>
                                    <p class="card-text">Valor Total:       $670.000</p>
                                    <p class="card-text">ID Producto:        </p>
                                    <p class="card-text">Cliente: JUAN RODRIGUEZ</p>
                                    <p class="card-text">ID Cliente: 999888777</p>
                                    <p class="card-text">Encargado Venta: Admin01.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                <img src="..." class="card-img-top" alt="Calvin Klein"/>
                                    <h5 class="card-title">ID Venta 002</h5>
                                    <p class="card-text">Fecha:  YYYY-MM-DD        </p>
                                    <p class="card-text">Valor Total:       $700.000</p>
                                    <p class="card-text">ID Producto:        </p>
                                    <p class="card-text">Cliente: PEDRO PEREZ</p>
                                    <p class="card-text">ID Cliente: 99999999</p>
                                    <p class="card-text">Encargado Venta: Admin01.</p>
                                </div>
                                          
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            </div>
        )   
    } 

    export default MaestroVentas