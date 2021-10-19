import React ,{ useState, useEffect } from 'react';
import Navbar from '../../shared/components/navbar';
import Sidebar from '../../shared/components/sidebar';
import perfil from '../../assets/images/perfiles.jpg';
import { useAuth0 } from '@auth0/auth0-react';
import './mainStyles.css'

const MainPage = () => {
    let userData;
    // Variables
    const [name, setName] = useState("");
    const [id, setId] = useState(0);
    const [role, setRole] = useState("");
    const [state, setState] = useState("");

    const { user } = useAuth0();

    const getUser = async () => {
        try {
            const response = await fetch(`http://localhost:3001/auth?email=${user.email}`);
            const jsonResponse = await response.json();
            userData = jsonResponse.data;
            setName(userData.nombre);
            setId(userData.id);
            setRole(userData.rol);
            setState(userData.estado);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUser();
    },[]);// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className='main'>
            <Navbar userName={name}></Navbar>
            <Sidebar></Sidebar> 
            <main className='main-container'>
                <img src={perfil} alt="Profile" />
                <h1>{name}</h1>
                <div className='data'>
                    <ul className='tag'>
                        <ol>Identificador de Usuario</ol>
                        <ol>Rol</ol>
                        <ol>Estado</ol>                       
                    </ul>
                    <ul className='info'>
                        <ol>{id}</ol>
                        <ol>{role}</ol>
                        <ol>{state}</ol>
                    </ul>
                </div>
            </main>         
        </div>
    )
}

export default MainPage

