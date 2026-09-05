import { useEffect, useRef, useState } from "react"
import { useMoviesStore } from "../store/FavoritesContext";
import MovieCard from "./MovieCard";


export default function SearchBar() {
  const searceRef = useRef('');
  const movies = useMoviesStore(s => s.movies);
  const [movie, setMovie] = useState('') 
  const SIM = movies.filter(m => m.name.toUpperCase().includes(movie.toUpperCase())) // SIM => Search Input Movie

  useEffect(()=>{
    searceRef.current.focus()
  },[movie])

  return (
    <div >
      🔍
      <input type="text" placeholder=" Search movies..." value={movie} onChange={e => setMovie(e.target.value) } ref={searceRef}></input>
      {/* <input type="text" value={movie} className="searchBar" ref={searceRef} onChange={e => setMovie(e.target.value) } placeholder=" Search movies..."> </input> */}
      <section className="cards">

      {SIM.map((m => <MovieCard key={m.id} {...m}/>))}
      </section>
    </div>
  )
}
