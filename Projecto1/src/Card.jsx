import { useState } from 'react'
import './App.css'


function CardProduct({id="" ,imgSrc="",imgAlt="Imagen Vacia", name, price=""}) {
  const [agregado, setAgregado] = useState(false);
  const textoBoton = agregado ? 'Quitar del Carrito' : 'Agregar al Carrito';
  const classBoton = agregado ? 'button card-button-quit' : 'button card-button';
  return (
    <article className='card' id={id}>
        <div className='card-img-container'>
            <img className='card-img' src={imgSrc} alt={imgAlt}/>
        </div>
        <div className='card-description-container'>
          <p className='card-title'><strong>{name}</strong></p>
          <p className='card-price'><strong>${price}</strong></p>
        </div>
        <div className='card-button-container'>
          <button className={classBoton} onClick={() => {setAgregado(!agregado)}}>{textoBoton}</button>
        </div>
    </article>
  );
}

export default CardProduct