import Boton from './Boton'; // Importamos el componente Boton

import './BotonDesplegable.css'; // Importamos el archivo de estilos


function BotonDesplegable({text, children, buttonActive, setButtonActive}) { 
    const toggleBoton = () => {
        buttonActive === text ? setButtonActive('') : setButtonActive(text);
    }
    
    return(
        <div className="boton-desplegable">
            <Boton className="toggleBoton" text={buttonActive === text ? "Cerrar" : `${text}`} onClick={toggleBoton}/>
            {buttonActive === text &&
                <div className="contenido">
                    {children}
                </div>
            }
        </div>
    )
}

export default BotonDesplegable; // Exportamos el componente BotonDesplegable