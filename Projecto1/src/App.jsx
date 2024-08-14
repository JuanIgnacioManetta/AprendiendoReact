import React, { useState, useEffect } from 'react'
import CardProduct from './Card.jsx'
import './App.css'

function App(){

  //Agrega automaticamente desde la API los productos a la lista
const [productos, setProductos] = useState([]);

useEffect(() => {
  fetch("https://my-json-server.typicode.com/JuanIgnacioManetta/prueba/productos")
    .then(response => response.json())
    .then(data => {
      setProductos(data);
    })
    .catch( error => {
      console.log(error)
      return (<p>{error}</p>);
    })

  }, []);

  //Renderiza los productos en la pagina
  return (
    <div className='tienda'>
       <h2>Carta de Productos</h2>
      <div className='card-container'>
        {productos.map(producto => (
          <CardProduct key={producto.id} imgSrc={producto.imagen} imgAlt={producto.nombre} name={producto.nombre} price={producto.precio}/>
        ))}
      </div>
    </div>
  );
  
}

export default App
