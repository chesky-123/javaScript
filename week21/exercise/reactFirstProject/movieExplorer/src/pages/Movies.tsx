import Header from '../components/Header'
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';


export default function Movies() {

  return (
    <div>
      <Header/>
      <p> Discover Movies</p>
      <SearchBar/>
      <MovieList/>
    </div>
  )
}
