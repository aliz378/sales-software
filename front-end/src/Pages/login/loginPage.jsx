import React from 'react';
import './loginStyles.css';
import {Link} from 'react-router-dom';


function loginPage() {
    return (
        <div className="containerLogin">
            <h1>Bienvenido</h1>     
            <p>Comienza a trabajar ahora mismo con un software
                fácil de usar que te va a encantar</p>  
            <Link to='/main'>
                    <button type="button" className="btn init"> Iniciar sesión </button>
            </Link>   
        </div>
    )
}

export default loginPage;



