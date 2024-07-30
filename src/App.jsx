import { useState } from "react";
import Formulario from "./components/Formulario";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(false);
  const [imagemEstaVisivel, setImagemEstaVisivel] = useState(true);
  return(
    
    <>
    <h1>Calculadora IMC</h1>      
      
      {formularioEstaVisivel &&(
        <Formulario/>
      )}

      {imagemEstaVisivel && (
        <img src="/Tabela-IMC.png" alt="" />
      )}

      <div>
      <button onClick={()=> setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>
      </div>
      <div>
        <button onClick={()=>setImagemEstaVisivel(!imagemEstaVisivel)} type="button">toggle image</button>

      </div>
      
        
      
    </>
  )
}  


export default App
