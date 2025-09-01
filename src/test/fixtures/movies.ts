import type { MovieDetail, MovieSummary } from '@/types/movie'


export const popular: MovieSummary[] = [
{ id: 1, title: 'Popular One', poster_path: '/p1.jpg', release_date: '2024-01-01', genre_ids: [28] },
{ id: 2, title: 'Popular Two', poster_path: '/p2.jpg', release_date: '2024-02-01', genre_ids: [35] },
]


export const topRated: MovieSummary[] = [
{ id: 3, title: 'Top A', poster_path: '/t1.jpg', release_date: '2020-03-01', genre_ids: [18] },
]


export const upcoming: MovieSummary[] = [
{ id: 4, title: 'Next Year', poster_path: '/u1.jpg', release_date: '2025-12-01', genre_ids: [12] },
]


export const details: MovieDetail[] = [
{
id: 1,
title: 'Popular One',
overview: 'Overview 1',
poster_path: '/p1.jpg',
release_date: '2024-01-01',
runtime: 120,
genres: [{ id: 28, name: 'Action' }],
},
{
id: 3,
title: 'Top A',
overview: 'Overview 3',
poster_path: '/t1.jpg',
release_date: '2020-03-01',
runtime: 95,
genres: [{ id: 18, name: 'Drama' }],
},
]


export const detailById: Record<number, MovieDetail> = Object.fromEntries(
details.map((d) => [d.id, d])
)