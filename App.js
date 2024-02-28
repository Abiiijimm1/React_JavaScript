import { useState} from "react";

function App() {
  const [contador, setContador] = useState(0);
  const [texto, setTexto]=useState("");
  const aumentar=()=>setContador(contador+1);
  const disminuir=()=>{
    if(contador>0){
    setContador(contador-1);
  }
}


  return (
    <div className="container fluid mt-5 d-flex flex-column align-items-center">
    <h3>El contador es: {contador} veces</h3>
    <div className="d-flex justify-content-center">
    <button onClick={aumentar} className="btn btn-primary me-2">AUMENTAR</button>

    {
      contador>0 ?(
        <button onClick={disminuir}className="btn btn-secondary">DISMINUIR</button>
      ): null
    }
    </div>
    <input type="text"
    className="mt-3 text-center"  
    placeholder="Escribir algo"
    onChange={evt=>setTexto(evt.target.value)}
    />

<p>{texto} </p>
    




    </div>
    
  );
}

export default App;
