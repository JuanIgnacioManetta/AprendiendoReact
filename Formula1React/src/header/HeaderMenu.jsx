import './HeaderMenu.css';

import Boton from './Boton.jsx';

function HeaderMenu({setVistaActual, vistaActual}) {
    return(
        <header>
            <div className='titulo'>
                <h1><a href="index.html" className="inicio">Formula 1</a></h1>
            </div>
            <div className='botones'>
                <Boton
                    onClick={() => setVistaActual('pilotos')} 
                    activo={vistaActual === 'pilotos'}
                    text='Pilotos' 
                />
                <Boton
                    onClick={() => setVistaActual('constructores')} 
                    activo={vistaActual === 'constructores'}
                    text='Constructores'
                />
            </div>
        </header>
    )
}

export default HeaderMenu;