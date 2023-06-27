import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import seacrhIcon from './search.svg';
import DropdownMenu from './DropdownMenu';
//api key: 7323815a
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7323815a"
function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');

  const sortMovies = (option) => {
    let sortedMovies = [...movies];
  
    if (option === 'year') {
      sortedMovies.sort((a, b) => b.Year.localeCompare(a.Year));
    }
  
    setMovies(sortedMovies);
  };
  

  const searchMovies = async (title) => {
    const url = `${API_URL}&s=${title}`
    const response = await fetch(url)
    const data = await response.json()
    setMovies(data.Search)
  };
  useEffect(() => {
    searchMovies('top');
  }, []);

  return (
    <div className="app">
      
      <h1>Filmi</h1>
      <div className='search'>
        <input placeholder='Search For Movies...'
        value={search}
         onChange={(e)=>setSearch(e.target.value)}
        />
        <img src={seacrhIcon}
        onClick={()=>searchMovies(search)}
        />
      </div>
      <DropdownMenu
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortMovies={sortMovies}
      />
   
     
      {
        movies.length > 0 ?
          (
            <div className='container'>
              {
                movies.map((movie) => (
                  <MovieCard movie={movie} /> 
                ))
              }
            </div>
          ):
          (
            <div className='empty'>
              <h1>no movies found</h1>
            </div>
          )
        }

    </div>
  )
}

export default App;
