import React from 'react'
import Header from '../components/Header'
import { useMoviesStore } from '../store/FavoritesContext'
import MovieCard from '../components/MovieCard'

export default function Favorites() {
  const {favorites} = useMoviesStore()
  return (
    <div>
      <Header/>
      <p>My Favorites ❤️</p>
      <div className='cards'>

      {favorites.map(f => <MovieCard key={f.id} {...f}/>)}
      </div>
    </div>
  )
}
