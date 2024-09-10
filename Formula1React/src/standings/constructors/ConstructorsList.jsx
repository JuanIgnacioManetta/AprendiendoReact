import ConstructorCard from './ConstructorCard.jsx'; // Importamos el componente de tarjeta de constructores
import ConstructorsFlagMap from '../constructors/ConstructorsFlagMap.js'; // Importamos el mapa de banderas de constructores
import ConstructorsImgMap from '../constructors/ConstructorsImgMap.js'; // Importamos el mapa de imágenes de constructores
import './ConstructorsList.css'; // Importamos el archivo de estilos del componente
import StandingsError from '../../errors/StandingsError'; // Importamos el componente de error

import axios from 'axios'; // Importamos axios para hacer peticiones HTTP
import { useEffect, useState } from 'react'; // Importamos useEffect y useState de react

function PilotsList() {
    const [constructors, setConstructors] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchConstructors = async () => {
            try{
                const constructorResults = await axios.get('https://ergast.com/api/f1/current/constructorStandings.json');
                setConstructors(constructorResults.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings);
            }catch(error){
                console.error(error);
            // Guarda el mensaje de error y el status code en un solo estado
                const statusCode = error.response ? error.response.status : 'Sin código de estado'; // Maneja casos sin status
                const errorMessage = error.message || 'Error desconocido';

                setError({ message: errorMessage, status: statusCode })
            }
        };
        fetchConstructors();
    }, []);  

    // Guarda los puntos del primer constructor si existe
    const pointsFirst = constructors.length > 0 ? parseFloat(constructors[0].points) : 0;

    // Dividimos la lista de constructores en los primeros tres y el resto
    const topThree = constructors.slice(0, 3);
    const rest = constructors.slice(3);

    return(
        // Si hay un error, muestra un mensaje de error
        error != null ? <div className='error-container'>
            <StandingsError 
            statusCode={error.status} 
            errorMessage={error.message}
            />
        </div> :
        // Si no hay datos, muestra un mensaje de cargando
        constructors.length === 0 ? <h1 className='cargando'>Cargando...</h1> :
        <div className='standings-container'>
            {/* Contenedor para los primeros tres constructores */}
            <div className="constructors-container-podium">
                {topThree.map((constructor, index) => (
                    <ConstructorCard
                    key={index}
                    linkWiki={constructor.Constructor.url}
                    position={index + 1}
                    points={constructor.points}
                    difference={`+${pointsFirst - constructor.points}`}
                    flagSrc={ConstructorsFlagMap[constructor.Constructor.nationality.toLowerCase()]}
                    nationality={constructor.Constructor.nationality}
                    name={constructor.Constructor.name}
                    constructorImgSrc={ConstructorsImgMap[constructor.Constructor.constructorId.toLowerCase()]}
                    />
                ))}
            </div>

            {/* Contenedor para el resto de constructores */}

            <div className="constructors-container-rest">
                {rest.map((constructor, index) => (
                    <ConstructorCard
                    key={index}
                    linkWiki={constructor.Constructor.url}
                    position={index + 4}
                    points={constructor.points}
                    diference={`+${pointsFirst - constructor.points}`}
                    flagSrc={ConstructorsFlagMap[constructor.Constructor.nationality.toLowerCase()]}
                    nationality={constructor.Constructor.nationality}
                    name={constructor.Constructor.name}
                    constructorImgSrc={ConstructorsImgMap[constructor.Constructor.constructorId.toLowerCase()]}
                    />
                ))}
            </div>
        </div>
    );
};

export default PilotsList;