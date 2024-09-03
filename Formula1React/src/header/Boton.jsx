import './Boton.css'; // Importamos el archivo de estilos del componente

function Boton({text, onClick}) {
    return(
        <button className="boton" onClick={onClick}>
            <p>
                {text}            
            </p>
        </button>
    )
}

export default Boton