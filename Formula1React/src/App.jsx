import './App.css';

import PilotsList from './standings/PilotsList.jsx'; // Importamos el componente PilotsList
import HeaderMenu from './header/HeaderMenu.jsx'; // Importamos el componente HeaderMenu

function App() {
    
  
    return(
      <>
        <HeaderMenu/>
        <PilotsList/>
      </>
    )
}

export default App
