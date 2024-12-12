import { useState } from "react";


function Cualquiera() { 
    const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    edad: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Formulario enviado: \nNombre: ${formData.nombre} \nCorreo: ${formData.correo} \nEdad: ${formData.edad}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="coloca tu nombre"
        />
      </label>
      <br />
      <label>
        
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
        placeholder="coloca tu email" 
 />
      </label>
      <br />
      <label>
        
        <input
          type="number"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
        placeholder="coloca tu edad"
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Cualquiera
