import MovieCard from "../components/MovieCard";
import {useState, UseState} from "react"

/* NOTES: 
 * In this document, we see a perfect example of the use of a state + conditional rendering to dynamically
 * update a page based on user input. Here are the steps we took:
 * 
 * 1. Create sample movies, and make a .map function that would pull from the "movies" list and display the information
 *      using a previously defined component, called "MovieCard" (line 46 - 49)
 * 2. To handle user input, we first create the HTML searchbar  (line 36 - 44)
 * 3. Define the [state, state_update_function] logic so that we can dynamically store the user input (line 19)
 * 4. Add the set_update_function (setSearchQuery) logic in the form submission logic (HTML) so that input is saved
 *      and the input is stored. This function will make sure to pass whatever input (e) the user gives onto the searchQuery
 *      variable (line 44)
* 5. Finally, use the state (searchQuery) for the movie filtering logic (HTML) along with a condiitonal rendering to display
     only those movies that start with the value stored in searchQuery (line 51)*/

function Home () {

    {/* This is convention: list[name of the state, function allowing state to update] 
        Any time we have a form, we might need to have a useState to keep track of the user's input
        In this case, we want to do so for an API search that will return the movies!*/}
    const [searchQuery, setSearchQuery] = useState(""); {/* Default value, in this case just empty string*/}

    const movies = [
        {id: 1, title : "Interstellar", release_date: "2014"},
        {id: 2, title : "Pinoccio", release_date: "2022"},
        {id: 3, title : "Avengers: Endgame", release_date: "2019"},
    ]

    // here, we will be making the API call!
    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }

    return (
        <div className = "home">
            <form onSubmit = {handleSearch} className = "search-form">
                <input
                    type = "text" 
                    placeholder = "Search for movies... " 
                    className = "search-input"
                    value = {searchQuery}
                    onChange = {(e) => setSearchQuery(e.target.value)} // This is how we update the searchquery (weird but ok...)
                />
                <button type = "submit" className = "search-button">Search</button>
            </form>
            <div className = "movies-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                        <MovieCard movie = {movie} key = {movie.id} />) // perfect utilization of conditional rendering + use of state
                    ))}  {/*return value of the .map function is a MovieCard comp*/}
            </div>
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