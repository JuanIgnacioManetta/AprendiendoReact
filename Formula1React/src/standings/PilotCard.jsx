import './PilotCard.css';

function PilotCard({className ,position , points, diference, name, flagSrc, flagAlt, team, number, pilotImgSrc}) {
    return (
        <a href="#" className={className}>
            <div className="frame-container">
                <div className="first-frame">
                    <p className="pilot-position">{position}</p>
                    <div className='pilot-point-diference'>
                        <div className="pilot-points">
                            <p>{points}</p>
                            <p>Pts</p>
                        </div>
                        {diference != 0 ? <p>{diference}</p> : ''}
                    </div>
                    
                </div>
                <div className="second-frame">
                    <p className={`name-pilot-${team}`}>{name}</p>
                    <img src={flagSrc} alt={flagAlt}/>
                </div>
                <div className="third-frame">
                    <p>{team}</p>
                </div>
                <div className="fourth-frame">
                    <div className="pilot-number">
                        <p className={`pilot-number-${team}`} id={`${team}number`}>{number}</p>
                    </div>
                    <img src={pilotImgSrc} alt={`${name} with the racesuit of ${team}`}/>
                </div>
            </div>
        </a>
    )
}

export default PilotCard