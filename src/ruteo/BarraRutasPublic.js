import React from 'react'
import { Routes, Route, Link} from 'react-router-dom';
             
import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import "./BarraNavegacion.css";
import { useNavigate } from 'react-router-dom';
          
import Home from '../public/Home';
import Dashboard from '../public/Dashboard';
import LoginForm from '../login/LoginForm';
import Noticias from '../public/Noticias';
import Contacto from '../public/Contacto';
import Informacion from '../public/Informacion';



const BarraRutasPublic = () => {
    const { user } = useAuth();
    const auth = getAuth();
    const navigate = useNavigate();
  
   const handleSignOut = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          // Cierre de sesión exitoso
          navigate('/home'); // Redirigir a ruta /home
        })
        .catch((error) => {
          console.error('Error al cerrar sesión:', error);
        });
    }
  }
  
    return (
      <div style={{ background:"violet", }}>
        <nav>
          <div id="login">
            <ul>
              
          
                <li> <Link to="/Iniciarsesion">Iniciar sesión</Link> </li>
              
            </ul>
          </div>
          
          <div id="menu">
            <ul>
            <li><Link to="/home">Home</Link> </li>
            <li><Link to="/informacion">Informacion</Link> </li>
            <li><Link to="/Noticias">Noticias </Link> </li>
            <li><Link to="/Contacto">Contacto </Link> </li>
            <li><Link to="/Dashboard">Portada(Dashboard)</Link> </li>
             
            </ul>
          </div>
        </nav>
  
        <Routes>
          <Route path="/iniciarsesion" element={<LoginForm/>} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Noticias" element={<Noticias/>} />
          <Route path="/Contacto" element={<Contacto/>} />
          <Route path="/informacion" element={<Informacion/>} />
          


        </Routes> 
      </div>
    )
}

export default BarraRutasPublic;

/*
  
                {user ? (         ////////  Para cerrar sesión   ///////////
                <li><Link onClick={handleSignOut} > Cerrar sesión </Link> </li> 
                ) : (
                <li> <Link to="/Iniciarsesion">Iniciar sesión</Link> </li>
              )}
  
  
  /*


/*
const handleSignOut = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          // Cierre de sesión exitoso
          navigate('/home'); // Redirigir a ruta /home
        })
        .catch((error) => {
          console.error('Error al cerrar sesión:', error);
        });
    }
  }
*/

