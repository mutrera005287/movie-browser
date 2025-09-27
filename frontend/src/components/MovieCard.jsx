
/* Makes a movie card box for display
 * It takes a movie object and we will use HTML and HTML classes
 * to format the attributes of the movie
 * 
 * Quick note: we use "ClassName" instead of just "class" in basic HTML to not
 * get us confused with regular classes in Java*/
function MovieCard({movie}) {
    /// functionality to toggle favorite movie
    function onFavoriteClick () {
        alert("clicked")
    }

    return (
        <div className = "movie-card">
            <div className = "movie-poster">
                <img src = {movie.url} alt = {movie.title}/>
                <div className = "movie-overlay">
                    <button className = "favorite-btn" onClick = {onFavoriteClick}>
                        ♥
                    </button>
                </div>
            </div>
            <div className = "movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieCard