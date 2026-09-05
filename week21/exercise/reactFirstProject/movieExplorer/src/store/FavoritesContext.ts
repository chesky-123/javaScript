import { create } from "zustand";
import type { CardProp } from "../hooks/useFech";
import { useState } from "react";



type MoviesStore = {
    movies: CardProp[],
    setMovies: (movies: CardProp[]) => void,
    favorites: CardProp[],
    add?: (movie: CardProp) => void,
    remove?: (movie: CardProp) => void
};



export const useMoviesStore = create<MoviesStore>((set) => ({
    movies: [],
    favorites: [],
    setMovies: (movies: CardProp[]) => set({ movies }),
    add: (movie: CardProp) => set((s) => ({ favorites: [...s.favorites, movie] })),
    remove: (movie: CardProp) => set((s) => ({
        favorites: s.favorites.filter(f => f.id === movie.id)
    }))
}))



