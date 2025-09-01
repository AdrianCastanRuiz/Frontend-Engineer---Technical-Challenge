import { Link } from 'react-router-dom'
import { MovieSummary } from 'src/types/movie'
import { imageUrl } from './../utils/format'
import './../styles/components/card.scss'

export default function MovieCard({ movie }: { movie: MovieSummary }) {
return (
<Link to={`/movie/${movie.id}`} className="card" aria-label={`Open ${movie.title} details`}>
<div className="card__media">
{movie.poster_path ? (
<img src={imageUrl(movie.poster_path, 'w342')} alt={movie.title} loading="lazy" />
) : (
<div className="card__placeholder">No image</div>
)}
</div>
<div className="card__body">
<h3 className="card__title">{movie.title}</h3>
{movie.release_date && <p className="card__meta">{new Date(movie.release_date).getFullYear()}</p>}
</div>
</Link>
)
}