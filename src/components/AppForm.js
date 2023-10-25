import React, { useState } from 'react'
import { db } from './firebase';
import { addDoc, collection } from 'firebase/firestore';

const AppForm = () => {

  ////////////////GUARDAR O ACTUALIZAR////////////////
  const camposRegistro = { nombre: "", edad:"",genero:""}
  const [objeto, setObjeto] = useState(camposRegistro);
  const handleSubmit  =(e)=> { //manejador de submit
    e.preventDefault();

    try {
      if(db){
        addDoc (collection(db, 'cliente'), objeto);
        console.log("se guardo con exito"); 
      }
    }catch (error){
      console.error();
    }
  }
  return (
    <div style ={{background:"orange",padding:"10px", textAlign:"center"}}>
      <form onSubmit={ handleSubmit }>
      <h1>AppForm.js</h1>
      <input type='text'placeholder='Nombre...'/>
      <input type='text'placeholder='Apellido...'/>
      <select>
        <option value="">Seleccione...</option>
        <option value="M">Masculino...</option>
        <option value="F">Femenino...</option>
        </select>
        <button>
          GUARDAR/ACTUALIZAR
        </button>
      
      </form>
    </div>
  )
}

export default AppForm
