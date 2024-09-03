import PilotCard from './PilotCard'; // Importamos el componente PilotCard
import StandingsError from '../errors/StandingsError';

import flagMap from './FlagMap'; // Importamos el objeto flagMap
import PilotImgMap from './PilotImgMap'; // Importamos el objeto PilotImgMap
import './PilotsList.css'; // Importamos el archivo de estilos de PilotsList


import axios from 'axios';
import { useEffect, useState } from 'react';

function PilotsList() {

    const [pilots, setPilots] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPilots = async () => {
            try{
                const pilotsResults = await axios.get('https://ergast.com/api/f1/current/driverStandings.json');
                setPilots(pilotsResults.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
            }catch(error){
                console.error(error);
            // Guarda el mensaje de error y el status code en un solo estado
                const statusCode = error.response ? error.response.status : 'Sin código de estado'; // Maneja casos sin status
                const errorMessage = error.message || 'Error desconocido';

                setError({ message: errorMessage, status: statusCode })
            }
        };
        fetchPilots();
    }, []);  


    // Guarda los puntos del primer piloto si existe
    const pointsFirst = pilots.length > 0 ? parseFloat(pilots[0].points) : 0;

    // Dividimos la lista de pilotos en los primeros tres y el resto
    const topThree = pilots.slice(0, 3);
    const rest = pilots.slice(3);

    return (    
            // Si hay un error, muestra un mensaje de error
            error != null ? <div className='error-container'>
                        <StandingsError 
                        statusCode={error.status} 
                        errorMessage={error.message}
                        />
                    </div> :
            // Si no hay datos, muestra un mensaje de cargando
            pilots.length === 0 ? <h1 className='cargando'>Cargando...</h1> :
            <div className='standings-container'>
            {/* Contenedor para los primeros tres pilotos */}
            <div className="pilots-container-podium">
                {topThree.map(pilot => (
                    <PilotCard
                        key={pilot.Driver.driverId}
                        className='pilot-card-podium'
                        position={pilot.position}
                        points={pilot.points}
                        diference={`+${pointsFirst - pilot.points}`}
                        name={`${pilot.Driver.givenName} ${pilot.Driver.familyName}`}
                        flagSrc={flagMap[pilot.Driver.nationality]}
                        flagAlt={`${pilot.Driver.nationality} flag`}
                        team={pilot.Constructors[0].name}
                        number={pilot.Driver.permanentNumber}
                        pilotImgSrc={PilotImgMap[pilot.Driver.familyName]}
                    />
                ))}
            </div>

            {/* Contenedor para el resto de los pilotos */}
            <div className="pilots-container-rest">
                {rest.map(pilot => (
                    <PilotCard
                        key={pilot.Driver.driverId}
                        className='pilot-card-rest'
                        position={pilot.position}
                        points={pilot.points}
                        diference={`+${pointsFirst - pilot.points}`}
                        name={`${pilot.Driver.givenName} ${pilot.Driver.familyName}`}
                        flagSrc={flagMap[pilot.Driver.nationality.trim()]}
                        flagAlt={`${pilot.Driver.nationality} flag`}
                        team={pilot.Constructors[0].name}
                        number={pilot.Driver.permanentNumber}
                        pilotImgSrc={PilotImgMap[pilot.Driver.familyName.trim()]}
                    />
                ))}
            </div>
        </div>
    );
}


export default PilotsList;
