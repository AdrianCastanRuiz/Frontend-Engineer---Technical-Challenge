import { MovieDetail, MovieSummary, MovieListResponse } from "src/types/movie"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY as string
const BASE = 'https://api.themoviedb.org/3'
const defaultParams = new URLSearchParams({ api_key: API_KEY, language: 'en-US' })


function assertKey() {
if (!API_KEY) throw new Error('Missing TMDB key: set VITE_TMDB_API_KEY in .env')
}


export async function fetchMovies(kind: 'popular' | 'top_rated' | 'upcoming'): Promise<MovieSummary[]> {
assertKey()
const res = await fetch(`${BASE}/movie/${kind}?${defaultParams.toString()}`)
if (!res.ok) throw new Error('Failed to fetch movies')
const data = (await res.json()) as MovieListResponse
return data.results
}


export async function fetchMovieById(id: number): Promise<MovieDetail> {
assertKey()
const res = await fetch(`${BASE}/movie/${id}?${defaultParams.toString()}`)
if (!res.ok) throw new Error('Failed to fetch movie')
return (await res.json()) as MovieDetail
}