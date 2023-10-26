import React, { useState } from 'react'
import { db } from './firebase';
import { addDoc, collection } from 'firebase/firestore';

const AppForm = () => {

  ////////////////GUARDAR O ACTUALIZAR////////////////
  const camposRegistro = { nombre: "", edad:"",genero:""}
  const [objeto, setObjeto] = useState(camposRegistro);
  console.log(objeto);

  const handleSubmit  =(e)=> { //manejador de submit
    e.preventDefault();

    try {
      
      if(validarForm()){
        addDoc (collection(db, 'persona'), objeto);
        console.log("se guardo con exito"); 
      }else{
        console.log("no se guardo")
      }
    }catch (error){
      console.error();
    }
  }

  // manejador del estado de cambios

  const handleStatusChange =(e) => {
    const {name, value} = e.target;
    setObjeto({...objeto,[name]:value});
    console.log(objeto,value);
  }
  //validacion
  const validarForm=()=> {
    if(objeto.nombre ===''){
      alert("escriba nombre...");
      return false;
    }
    return true;
  };
  
  return (
    <div style ={{background:"orange",padding:"10px", textAlign:"center"}}>
      <form onSubmit={ handleSubmit }>
      <h1>AppForm.js</h1>

      <input onChange={handleStatusChange} 
      value={objeto.nombre} name='nombre'
       type='text'placeholder='Nombre...'/> <br/>

      <input onChange={handleStatusChange} 
      value={objeto.edad} name='edad'
       type='text'placeholder='Edad...'/> <br/>
    
      
      <select onChange={handleStatusChange} 
        name='genero'> 
        <option value="">Seleccione...</option>
        <option value= "M">Masculino...</option>
        <option value="F">Femenino...</option>
        </select><br/>
        <button>
          GUARDAR/ACTUALIZAR
        </button>
      
      </form>
    </div>
  )
}

export default AppForm