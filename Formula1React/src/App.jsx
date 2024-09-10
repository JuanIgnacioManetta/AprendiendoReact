import './App.css';
import { useState } from 'react';


import HeaderMenu from './header/HeaderMenu.jsx'; // Importamos el componente HeaderMenu

import PilotsList from './standings/pilots/PilotsList.jsx'; // Importamos el componente PilotsList
import ConstructorsList from './standings/constructors/ConstructorsList.jsx'; // Importamos el componente ConstructorsList

function App() {
    const [vistaActual, setVistaActual] = useState('pilotos'); // Creamos un estado para almacenar la vista actual
    
    
    return(
      <>
        <HeaderMenu setVistaActual={setVistaActual} vistaActual={vistaActual}/>

        {
          vistaActual === 'pilotos' ? <PilotsList/> : <ConstructorsList/>
        }
      </>
    )
}

export default App
