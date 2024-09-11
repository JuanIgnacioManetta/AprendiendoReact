import './HeaderMenu.css';

import { useState } from 'react';

import Boton from './Boton.jsx';
import BotonDesplegable from './BotonDesplegable.jsx';

function HeaderMenu({setVistaActual, vistaActual}) {

    const [buttonActive, setButtonActive] = useState('');

    const toggleButton = (text) => {
        setButtonActive(text);
    }

    return(
        <header>
            <div className='titulo'>
                <h1><a href="index.html" className="inicio">Formula 1</a></h1>
            </div>
            <div className='expandButtons'>
                <BotonDesplegable 
                    text='Posiciones'
                    children={
                        <div>
                            <Boton text='Pilotos' onClick={() => {setVistaActual('pilotos'); toggleButton('')}}/>
                            <Boton text='Constructores' onClick={() => {setVistaActual('constructores'); toggleButton('')}} />
                        </div>
                    }
                    buttonActive={buttonActive}
                    setButtonActive={toggleButton}
                />
                <BotonDesplegable
                    text="Carreras"
                    children={
                        <div>
                            <Boton text='Calendario' onClick={() => {setVistaActual('calendario'); toggleButton('')}} />
                            <Boton text='Resultados' onClick={() => {setVistaActual('resultados'); toggleButton('')}} />
                        </div>
                    }
                    buttonActive={buttonActive}
                    setButtonActive={toggleButton}
                />
            </div>
        </header>
    )
}

export default HeaderMenu;