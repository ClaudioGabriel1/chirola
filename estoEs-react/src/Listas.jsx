

function Listas() {
    const nombres = ['Alice', 'Bob', 'Charlie', 'claudio'];
    
      return (
        <>
          <h1>Lista de Usuarios</h1>
          <ul>
            {
                nombres.map((nombre, i) => (
                <li key={i}>{nombre}</li>
                ))}
          </ul>
        
        </>
  )
}

export default Listas
