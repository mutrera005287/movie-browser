import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  const movieNumber = 1;

  return (
    <> {/* Fragment: returns must have one parent */}
      {movieNumber === 1 && <MovieCard movie = {{title:"Film 1", release_date:"2019"}} />}
    </>
  );
}

export default App;
