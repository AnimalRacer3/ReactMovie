function MovieCard({movie})
{
    function OnFavoriteClick()
    {
        alert("Favorite Clicked");
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={OnFavoriteClick}>♡</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p><span>Year:</span> {movie.year}</p>
                <p><span>Rating:</span> {movie.rating}/10</p>
            </div>
        </div>
    )
}

export default MovieCard;