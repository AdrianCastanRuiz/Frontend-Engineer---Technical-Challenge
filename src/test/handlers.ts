import { http, HttpResponse } from 'msw'
import { popular, topRated, upcoming, detailById } from './fixtures/movies'


const BASE = 'https://api.themoviedb.org/3'


export const handlers = [
http.get(`${BASE}/movie/popular`, () => HttpResponse.json({ results: popular })),
http.get(`${BASE}/movie/top_rated`, () => HttpResponse.json({ results: topRated })),
http.get(`${BASE}/movie/upcoming`, () => HttpResponse.json({ results: upcoming })),
http.get(`${BASE}/movie/:id`, ({ params }) => {
const id = Number(params.id)
const data = detailById[id]
if (!data) return new HttpResponse(null, { status: 404 })
return HttpResponse.json(data)
}),
]