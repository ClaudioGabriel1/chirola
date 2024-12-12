import { useEffect } from "react";
import { useState } from "react"


function Minicrono() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(prev => prev + 1);
    }, 1000)
    return() => clearInterval(intervalo)
  }, [])

  return (
    <div>
       <h1>Segundos: {segundos}</h1>
    </div>
  )
}

export default Minicrono
