import React from 'react'
import { Routes, Route, Link} from 'react-router-dom';
             
import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import "./BarraNavegacion.css";
import { useNavigate } from 'react-router-dom';
          
import Home from '../public/Home';
import Dashboard from '../public/Dashboard';
import LoginForm from '../login/LoginForm';
import informacion from  '../public/informacion';


const BarraRutasPublic = () => {
    const { user } = useAuth();
    const auth = getAuth();
    const navigate = useNavigate();
  
    const handleSignOut = () => {
     
    }
  
    return (
      <div style={{ background:"greenyellow", }}>
        <nav>
          <div id="login">
            <ul>
              
          
                <li> <Link to="/Iniciarsesion">Iniciar sesión</Link> </li>
              
            </ul>
          </div>
          
          <div id="menu">
            <ul>
            <li><Link to="/">Noticias </Link> </li>
             <li><Link to="/">Informacion</Link> </li>
              <li><Link to="/">Portada(Dashboard)</Link> </li>
              <li><Link to="/home">Home</Link> </li>
            </ul>
          </div>
        </nav>
  
        <Routes>
          <Route path="/iniciarsesion" element={<LoginForm/>} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/informacion" element={<informacion/>} />
          <Route path="/noticias" element={<noticias />} />


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

