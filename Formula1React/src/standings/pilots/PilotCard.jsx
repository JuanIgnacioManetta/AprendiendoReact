import flagMap from "./FlagMap";
import PilotImgMap from "./PilotImgMap";

import './PilotCard.css';

function PilotCard({position , points, difference, name, flagSrc, nationality, team, number, pilotImgSrc}) {
    return (
        <a className="pilotCard-a" href="">
            <div className="pilotCard">
                <div className="pilotCard__header">
                    <div className="pilotCard__imageWrapper">
                        <img className="pilotCard__image" src={pilotImgSrc} alt={name} />
                    </div>
                    <div className="pilotCard__info">
                        <div className="pilotCard__infoPosition">
                            <span className="pilotCard__position">{position}</span>
                            <div className="pilotCard__pointsWrapper">
                                <span className="pilotCard__points">{points} Pts</span>
                                {difference != 0 ? <span className="pilotCard__pointsDiff">{difference}</span> : ""}
                            </div>
                        </div>
                        <div className="pilotCard__infoName">
                            <span className="pilotCard__name">{name}</span>
                            <div className="pilotCard__nationality">
                                <img className="pilotCard__flag" src={flagSrc} alt={`${nationality} flag`} />
                                <span className="pilotCard__nationalityName">{nationality}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pilotCard__footer">
                    <span className={`pilotCard__team pilotCard_team__${team}`}>{team}</span>
                    <span className={`pilotCard__number pilotCard__number__${team}`}>{number}</span>
                </div>
            </div>
        </a>
    );
}

export default PilotCard;