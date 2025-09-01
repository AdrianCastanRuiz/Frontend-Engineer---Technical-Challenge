import { fetchMovies, fetchMovieById } from '../../services/tmdb'
import { describe, it, expect } from 'vitest'


describe('tmdb service', () => {
it('fetchMovies(popular) devuelve resultados', async () => {
const res = await fetchMovies('popular')
expect(res.length).toBeGreaterThan(0)
})


it('fetchMovieById devuelve detalle', async () => {
const res = await fetchMovieById(1)
expect(res.id).toBe(1)
expect(res.title).toBeTruthy()
})
})