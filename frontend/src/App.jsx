import './css/App.css';
import Favorite from './pages/Favorites';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom"

function App() {
  const movieNumber = 1;

  return (
    <div>
      <NavBar /> {/* Notice where we are adding this*/}
      <main className= 'main-content'> {/* Fragment: returns must have one parent */}
        <Routes>
          <Route path = "/" element = {<Home />} /> {/* Note: the path is not referring to the local paths, rather the actual HTTPS addresses on the app*/}
          <Route path = "/Favorites" element = {<Favorite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
