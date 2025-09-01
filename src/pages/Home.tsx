import Carousel from '../components/Carousel'
import MovieCard from '../components/MovieCard'
import Spinner from '../components/Spinner'
import ErrorState from '../components/ErrorState'
import { useQuery } from '@tanstack/react-query'
import { fetchMovies } from '../services/tmdb'

export default function Home() {
const popular = useQuery({ queryKey: ['popular'], queryFn: () => fetchMovies('popular') })
const topRated = useQuery({ queryKey: ['top_rated'], queryFn: () => fetchMovies('top_rated') })
const upcoming = useQuery({ queryKey: ['upcoming'], queryFn: () => fetchMovies('upcoming') })


if (popular.isLoading || topRated.isLoading || upcoming.isLoading) return <Spinner />
if (popular.isError || topRated.isError || upcoming.isError) return <ErrorState />


return (
<div className="stack-lg">
<Carousel title="Popular">
{popular.data!.map((m) => (
<MovieCard key={m.id} movie={m} />
))}
</Carousel>
<Carousel title="Top Rated">
{topRated.data!.map((m) => (
<MovieCard key={m.id} movie={m} />
))}
</Carousel>
<Carousel title="Upcoming">
{upcoming.data!.map((m) => (
<MovieCard key={m.id} movie={m} />
))}
</Carousel>
</div>
)
}