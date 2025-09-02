import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchMovieById } from './../services/tmdb'
import Spinner from './../components/Spinner'
import ErrorState from './../components/ErrorState'
import WishlistButton from './../components/WishListButton'
import { imageUrl } from './../utils/format'
import { categoryFromGenres, labelForCategory } from './../utils/categories'
import type { MovieDetail, MovieSummary, Genre } from 'src/types/movie'
import './../styles/components/detail.scss'

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>()
  const movieId: number = Number(id)

  const { data, isLoading, isError } = useQuery<MovieDetail>({
    queryKey: ['movie', movieId],
    queryFn: () => fetchMovieById(movieId),
    enabled: Number.isFinite(movieId),
  })

  if (isLoading) return <Spinner />
  if (isError || !data) return <ErrorState />

  const genreIds: number[] = data.genres.map((g: Genre) => g.id)
  const cat = categoryFromGenres(genreIds)
  const themeClass = `theme--${cat}` as const

  const summary: MovieSummary = {
    id: data.id,
    title: data.title,
    poster_path: data.poster_path,
    release_date: data.release_date,
    genre_ids: genreIds,
  }

  return (
    <article className={`detail ${themeClass}`}>
      <header className="detail__header">
        <span className={`badge badge--${cat}`}>{labelForCategory(cat)}</span>
        <h1 className="detail__title">{data.title}</h1>
      </header>

      <div className="detail__content">
        <div className="detail__poster">
          {data.poster_path ? (
            <img src={imageUrl(data.poster_path, 'w500')} alt={data.title} />
          ) : (
            <div className="card__placeholder">No image</div>
          )}
        </div>

        <div className="detail__meta">
          <p className="detail__overview">{data.overview || 'No description available.'}</p>
          <ul className="detail__list">
            {data.release_date && (
              <li>
                <strong>Release:</strong> {data.release_date}
              </li>
            )}
            {typeof data.runtime === 'number' ? (
              <li>
                <strong>Runtime:</strong> {data.runtime} min
              </li>
            ) : null}
            {data.genres.length > 0 ? (
              <li>
                <strong>Genres:</strong> {data.genres.map((g: Genre) => g.name).join(', ')}
              </li>
            ) : null}
          </ul>

          <div className="detail__actions">
            <WishlistButton movie={summary} />
            <a
              className="btn btn--ghost"
              href={`https://www.themoviedb.org/movie/${data.id}`}
              target="_blank"
              rel="noreferrer"
            >
              View on TMDB
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
