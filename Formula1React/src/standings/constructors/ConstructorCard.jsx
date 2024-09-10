import './ConstructorCard.css';


function ConstructorCard({linkWiki, position, points, difference, name,flagSrc, nationality, constructorImgSrc}) {
    return (
        <a className="constructorCard-a" href={linkWiki} target='_blank'>
            <div className="constructorCard">
                <div className="constructorCard__header">
                    <div className="constructorCard__imageWrapper">
                        <img className="constructorCard__image" src={constructorImgSrc} alt={name} />
                    </div>
                    <div className="constructorCard__info">
                        <div className="constructorCard__infoPosition">
                            <span className="constructorCard__position">{position}</span>
                            <div className="constructorCard__pointsWrapper">
                                <span className="constructorCard__points">{points} Pts</span>
                                {difference != 0 ? <span className="constructorCard__pointsDiff">{difference}</span> : ""}
                            </div>
                        </div>
                        <div className="constructorCard__infoName">
                            <span className={`constructorCard__name constructorCard__${name}`}>{name}</span>
                        </div>
                    </div>
                </div>
                <div className='constructorCard__footer'>
                    <div className="constructorCard__nationality">
                        <img className="constructorCard__flag" src={flagSrc} alt={`${nationality} flag`} />
                        <span className="constructorCard__nationalityName">{nationality}</span>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default ConstructorCard;