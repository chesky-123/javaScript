import useFech from '../hooks/useFech';
import { useMoviesStore } from '../store/FavoritesContext';
import MovieCard from './MovieCard';

export default function MovieList() {

  const favorites = useMoviesStore(s => s.favorites)
  const { movies } = useFech();


  return (
    <div className='cards'>

      {favorites.map(m => <MovieCard key={m.id} {...m} />)}
    </div>
  )
}
