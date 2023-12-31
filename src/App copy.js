import { useState } from 'react';
import AppForm from './components/AppForm';
import logo from './logo.svg';
//import './App.css';
import C01componente from './pagina/C01componente';
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from './components/firebase';



function App() {
  ///////////READ - LECTURA - FNREAD//////////
  const[docBD, setDocBD] = useState([]);
  const fnRead = () => {
      try {
        const xColeccionConQuery = query(collection(db, 'persona'));
        const unsubcribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
            const xDoc = [];
            xDatosBD.forEach( (doc) => {
             xDoc.push({id: doc.id, ...doc.data()});
            });
            setDocBD(xDoc);
          
          });   
      } catch (error) {
        console.error(error);
        
      }
  

  }

  fnRead();
    ////////// DELETE - ELEMINAR - FNDELETE//////
    const [idActual, setIdActual] = useState ("");
    const fnDelete = async (xId) => {
      if (window.confirm("Confirme para eliminar")) {
        await deleteDoc(doc(db,'persona', xId));
        console.log("se elimino con exito..."+xId);        
      }
    }
    


 

  return (
    <div style={{ width: "350px", background: "greenyellow", padding: "10px" }}>
      <AppForm {...{ idActual, setIdActual, fnRead }} />
      { 
        docBD.map((p) =>
          <p key={p.id}> 
            No. {p.nombre}...
            <span onClick={() => fnDelete(p.id)}>X</span>
            .....
            <span onClick={() => setIdActual(p.id)}>A</span>
          </p>
        )
      }
     
    </div>
  );
}
export default App;
