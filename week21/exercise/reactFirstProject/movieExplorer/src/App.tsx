
import { Route, Routes } from 'react-router'
import './App.css'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import Favorites from './pages/Favorites'

function App() {

  return (
   <div>
    <Routes>
      <Route path='/' element={<Movies/>}/>
      <Route path='MovieDetails/:id' element={<MovieDetails/>}/>
      <Route path='Favorites' element={<Favorites/>}/>
    </Routes>
   </div>
  )
}

export default App
