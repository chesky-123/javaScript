import Header from '../components/Header'
import { Link, useParams } from 'react-router'
import useFech from '../hooks/useFech';
import { useMoviesStore } from '../store/FavoritesContext';

export default function MovieDetails() {
  const add = useMoviesStore(s => s.add)
  const { id } = useParams();
  const { movies } = useFech();

  const movie = movies.find(m => m.id === Number(id));

  if (!movie) {
    return <div>Loading...</div>;
  }

  

  return (
    <div
      className="details-container"
      style={{ backgroundImage: `url(${movie.image.medium})` }} // זה ג'מיני נתן לי
    >
      <Header />

      <Link to='/' className="back-link">← Back to Movies</Link>
      <p>{movie.language}</p>
      <button onClick={() =>  add!(movie)}>❤️ Add to Favorites</button>


    </div>
  )
}