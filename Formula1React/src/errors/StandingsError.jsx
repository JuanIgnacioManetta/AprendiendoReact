import './StandingsError.css';

function StandingsError({statusCode,errorMessage}) {
    return(
        <div className="error">
            <h2>{statusCode}</h2>
            <p>{errorMessage}</p>
        </div>
    )
}

export default StandingsError;