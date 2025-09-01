export interface MovieSummary {
id: number
title: string
poster_path: string | null
release_date?: string
genre_ids: number[]
}


export interface MovieListResponse {
results: MovieSummary[]
}


export interface Genre { id: number; name: string }


export interface MovieDetail {
id: number
title: string
overview: string
poster_path: string | null
release_date?: string
runtime?: number
genres: Genre[]
}