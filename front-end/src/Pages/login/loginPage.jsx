import React, { useState, useEffect } from 'react'; // <<--- HOOKS
import './loginStyles.css';
import { useHistory } from 'react-router-dom';


function LoginPage() {
    let assigned = false; 
    let history = useHistory();
    let listUsers;
    /*Cada vez que hay una cambio se guarda la información en username, es util si tengo un formilario donde debo ingresar datos*/
    const [username, setUserName] = useState("");
    
    //4) Recorro mi lista de usuarios 
    const submitData = () =>{
        listUsers.map(user =>{
            if(user.nombre === username){// verifico si mi usuario existe en la tabla
                if(user.rol !== 'pendiente' && user.estado ==='autorizado') assigned = true;
            };
        });
        //si el usuario existe y tiene rol entonces va a main, si no muestra la página de error
        (assigned) ? history.push('/main') : history.push('/rolError');
    }
    //2) Descarga la información de mi base de datos
    const getUsers = async () =>{
        try{
            const response = await fetch("http://localhost:3001/get-users");// Hago conexión con mi api y mi api con la Base de datos
            const jsonResponse = await response.json();
            listUsers = jsonResponse.data; //Se guarda la lista de usuarios en mi variable listUsers
        }catch(e){
            console.log(e)
        }
        
    }
    //1)Se llama apenas inicia la página
    useEffect(() => {
        getUsers();
    });
   
    return (
        <div className="containerLogin">
            <h1>Bienvenido</h1>     
            <p>Comienza a trabajar ahora mismo con un software
                fácil de usar que te va a encantar</p>      
            <input type="text" className="nameInit" name="username" required="obligatorio" autoComplete="off"
            placeholder="Ingrese nombre del usuario" value={username} onChange={e => setUserName(e.target.value)}/>
            {/* 3)Hago click en iniciar sesión para verificar si mi usuario existe */}
            <button type="button" className="init" onClick={submitData}> Iniciar sesión </button>
        </div>
    )
}

export default LoginPage;



