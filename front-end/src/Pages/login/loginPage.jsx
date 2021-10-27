import React, { useState, useEffect } from 'react'; // <<--- HOOKS
import './loginStyles.css';
import { Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import apiBaseUrl from '../../shared/utils/api';


function LoginPage() {
    const [validUser, setValidUser] = useState(0);

    const { loginWithRedirect, user, isAuthenticated } = useAuth0();

    const validateUserRole = async() => {
        try{
            const response = await fetch(`${apiBaseUrl}/auth?email=${user.email}`);
            const jsonResponse = await response.json();
            // console.log(user);
            return jsonResponse.data;
        }catch(e){
            console.log(e);
            return null;
        }
    }

    const addUser = async() => {
        let idGoogle = user.sub;
        idGoogle = parseInt(idGoogle.slice(14));
        const response = await fetch(`${apiBaseUrl}/add-user`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
        body: JSON.stringify({
            nombre:user.name,
            id:idGoogle,
            telefono:0,
            email:user.email,            
            rol:'usuario',
            estado:'pendiente'
        })})
        console.log(response);
    }

    const grantAccess = async () =>{
        if(isAuthenticated){
            const userData = await validateUserRole();
            // console.log(userData.rol,userData.estado)
            if(userData){
                setValidUser((userData.rol !== 'usuario'&& userData.estado ==='autorizado') ? 1 : 2);
            }else{
                addUser();
                setValidUser(2); 
            }    
        }else{
            setValidUser(0);
        }
    }
    
    useEffect(() => {
        grantAccess();
    },[isAuthenticated,validUser]);// eslint-disable-line react-hooks/exhaustive-deps
   
    return (
        <div className="containerLogin">
            <h1>Bienvenido</h1>     
            <p>Comienza a trabajar ahora mismo con un software
                fácil de usar que te va a encantar</p>      
            <button type="button" className="init" onClick={()=>loginWithRedirect()}> Iniciar sesión </button>
            {(validUser === 0) ? null : ((validUser === 1) 
                ? <Redirect to='/main'></Redirect>
                : ((validUser === 2)
                ? <Redirect to='/rolError'></Redirect>
                : <Redirect to='/notFoundUser'></Redirect>))
            }
        </div>
    )
}

export default LoginPage;



