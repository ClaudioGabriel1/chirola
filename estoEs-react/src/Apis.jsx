import { useEffect } from "react";
import { useState } from "react"

function Apis() {
    const [id, setId] = useState(""); // Estado para almacenar el ID ingresado
    const [llamado, setLlamado] = useState(null); // Estado para almacenar los datos de la API
    const [cargando, setCargando] = useState(false); // Estado de carga
    
  
    // Función para manejar el cambio en el input
    const handleInputChange = (e) => {
      setId(e.target.value);
    };
  
    // Función para obtener los detalles del Pokémon
    const fetchPokemon = (pokemonId) => {
      if (!pokemonId) return; // Si el ID está vacío, no hacer la solicitud
      setCargando(true);
      
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((res) => res.json())
        .then((data) => {
          setLlamado(data); // Almacenamos los datos del Pokémon
          setCargando(false); // Detenemos la carga
        })
       
    };
  
    // Usamos useEffect para llamar a la API cada vez que el ID cambie
    useEffect(() => {
      if (id) {
        fetchPokemon(id);
      }
    }, [id]); // El efecto se ejecuta cada vez que el ID cambia
  
    return (
      <div>
        <h1>Introduce el ID del Pokémon:</h1>
        <input
          type="number"
          value={id}
          onChange={handleInputChange}
          placeholder="Buscar..."
        />
  
        {cargando && <p>Cargando...</p>} {/* Mostrar mensaje de carga */}
       
        
        {llamado && !cargando &&  (
          <div>
            <h2>Detalles del Pokémon</h2>
            <p><strong>Nombre:</strong> {llamado.name}</p>
            <p><strong>ID:</strong> {llamado.id}</p>
            <img src={llamado.sprites.front_default} alt={llamado.name} />
          </div>
        )}
      </div>
  )
}

export default Apis
