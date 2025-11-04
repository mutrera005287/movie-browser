import MovieCard from "../components/MovieCard";
import {useState, useEffect, use} from "react"
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"

/* NOTES: 
 * In this document, we see a perfect example of the use of a state + conditional rendering to dynamically
 * update a page based on user input. Here are the steps we took:
 * 
 * 1. Create sample movies, and make a .map function that would pull from the "movies" list and display the information
 *      using a previously defined component, called "MovieCard" 
 * 2. To handle user input, we first create the HTML searchbar  
 * 3. Define the [state, state_update_function] logic so that we can dynamically store the user input 
 * 4. Add the set_update_function (setSearchQuery) logic in the form submission logic (HTML) so that input is saved
 *      and the input is stored. This function will make sure to pass whatever input (e) the user gives onto the searchQuery
 *      variable 
* 5. Finally, use the state (searchQuery) for the movie filtering logic (HTML) along with a condiitonal rendering to display
     only those movies that start with the value stored in searchQuery*/

function Home () {

    {/* This is convention: list[name of the state, function allowing state to update] 
        Any time we have a form, we might need to have a useState to keep track of the user's input
        In this case, we want to do so for an API search that will return the movies!*/}
    const [searchQuery, setSearchQuery] = useState(""); {/* Default value, in this case just empty string*/}
    const [movies, setMovies] = useState([]); //storing in list so that it automatically re-render component
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // everytime the dependency array (the one at the end of the func call) is updated
    // we run the function inside of the useEffect call.
    // In our case, we leave an empty array and don't update just so we make a single call to the API

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch(err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [] )
    // here, we will be making the API call!
    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }

    return (
        <div className = "home">
            <form onSubmit = {handleSearch} className = "search-form"> {/*Search bar */}
                <input
                    type = "text" 
                    placeholder = "Search for movies... " 
                    className = "search-input"
                    value = {searchQuery}
                    onChange = {(e) => setSearchQuery(e.target.value)} // This is how we update the searchquery (weird but ok...)
                />
                <button type = "submit" className = "search-button">Search</button>
            </form>

                {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className = "loading">Loading...</div>
            ): (
                <div className = "movies-grid">
                    {movies.map((movie) => (
                        <MovieCard movie = {movie} key = {movie.id} /> // perfect utilization of conditional rendering + use of state
                    ))}  {/*return value of the .map function is a MovieCard comp*/}
                </div>
            )}
        </div>
    );
}

/*NOTE ON movies.map:
 * This function iterates over the "movies" array, where we have stored our movies ("objects")
 * It will return then a MovieCard component with the information of each movie, stored in the "movies" array
 * */

/* NOTE ON onChange: *
 * We are doing this so that everytime the user types something, the function setSearchQuery is called, updating the value of searchQuery (above)
 * This allows us to refresh the page dynamically everytime the user inputs smth so new movies are displayed*/

export default Home;