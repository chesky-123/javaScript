import React from 'react'
import useFech, { type CardProp } from '../hooks/useFech';
import { Link, useParams } from 'react-router';



export default function MovieCard(props: CardProp) {
  // const { id } = useParams()
  // const { data } = useFech();
  // const movie = data.filter(m => m.id === Number(id))

  return (
    <div className='card'>
      <a href={props.url && props.url}><img className='cardImg' src={props.image.medium} alt="" /></a>
      
      <h1 className='title'>{props.name}</h1>
      <p>⭐  {props.rating?.average}</p>
      <Link to={`MovieDetails/${props.id}`}>
        <button>view</button>
      </Link>
    </div>
  )
}
