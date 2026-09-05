import React, { useEffect, useState } from 'react'
import { useMoviesStore } from '../store/FavoritesContext';


export type CardProp = {
    userId?: number
    id: number,
    name: string,
    body: string,
    image: { medium: string },
    language?: string,
    url?: string,
    rating?: { average: number }
}



export default function useFech() {
    const movies = useMoviesStore(s => s.movies);
    const setMovies = useMoviesStore(s => s.setMovies);
    const [error, setError] = useState('');

    useEffect(() => {
        if (movies.length === 0)
            fetch('https://api.tvmaze.com/shows')
                .then(res => res.json())
                .then(data => setMovies(data))
                .catch(e => setError(e))
    }, [])
    return {
        movies,
        setMovies,
        error,
        setError
    }
}
