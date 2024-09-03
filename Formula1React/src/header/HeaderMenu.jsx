import './HeaderMenu.css';

import Boton from './Boton.jsx';

function HeaderMenu() {
    return(
        <header>
            <div className='titulo'>
                <h1><a href="index.html" className="inicio">Formula 1</a></h1>
            </div>
            <div className='botones'>
                <Boton text='Pilotos'/>
                <Boton text='Circuitos'/>
            </div>
        </header>
    )
}

export default HeaderMenu