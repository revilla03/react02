import { useState } from 'react';
import AppForm from './components/AppForm';
import logo from './logo.svg';
//import './App.css';
import C01componente from './pagina/C01componente';
import { collection, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from './components/firebase';

function App() {

  ////////////READ-LECTURA -fnRead/////////
  const[docBD,seDocBD]=useState([]);
  const fnRead =()=> {
    try {
      const xColeccionConQuery = query (collection(db,"persona"));
      const unsubcribe = onSnapshot(xColeccionConQuery,(xDatosBD)=> {
        const xDoc = [];
        xDatosBD.forEach ((doc)=> {
          xDoc.push({id:doc.id,...doc.data()});
        });
        
        seDocBD(xDoc);
      });
    } catch (error) {
      console.error(error);
    }
  }
  /////////// DELETE -Eliminar-fnDelete/////
  const [idActual, setIdActual]= useState("");
  const fnDelete = (xId)=> {}

  return (
    <div style ={{width:"350px",background:"greenyellow",padding:"10px"}}>
      <AppForm {...{idActual, setIdActual, fnRead}} />
      {docBD.map ((p) =>
      <p key={p.id}>
      No. 1 {p.nombre}...
      <span onClick={() => fnDelete(p.id)}>x </span>
      ...
      <span onClick={() => setIdActual(p.id)}> A </span>
      </p>
        )
      }
    
  
    </div>
    
  );
}

export default App;
