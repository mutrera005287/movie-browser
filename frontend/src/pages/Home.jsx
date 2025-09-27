import MovieCard from "../components/MovieCard";

function Home () {
    const movies = [
        {id: 1, title : "Movie 1", release_date: "2019"},
        {id: 2, title : "Movie 2", release_date: "2020"},
        {id: 3, title : "Movie 3", release_date: "2021"},
    ]

    return (
        <div className = "home">
            <div className = "movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie = {movie} key = {movie.id} />
                    ))}  {/*return value of the .map function is a MovieCard comp*/}
            </div>
        </div>
    );
}

/*NOTE ON movies.map:
 * This function iterates over the "movies" array, where we have stored our movies ("objects")
 * It will return then a MovieCard component with the information of each movie, stored in the "movies" array
 * */

export default Home;