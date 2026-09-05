// import {Link} from 'react-router'

import { Link } from "react-router";


export default function Header() {
  return (
    <header>
      <button className="headerButton"><Link to='/'>🎬 Movie Explorer</Link></button>
      <button className="headerButton"><Link to='/Favorites'>Favorites</Link></button>
      
      
    </header>
  )
}
