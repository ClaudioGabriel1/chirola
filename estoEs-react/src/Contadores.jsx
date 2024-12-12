import { useState } from "react"


function Contadores() {
  const[contador, setContador] = useState(0);
  const stopContador = () => {
    if (contador < 10) {
        setContador(contador + 1); 
      }
    };
  
  
    return (
    <div>
      <h1>contador: {contador}</h1>
      <button onClick={stopContador}>+</button>
      <button onClick={() => setContador(0)}>rest</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
    </div>
  )
}

export default Contadores
