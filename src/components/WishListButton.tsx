import { useWishlistStore } from './../store/wishlist'
import { MovieSummary } from 'src/types/movie'

export default function WishlistButton({ movie }: { movie: MovieSummary }) {
const exists = useWishlistStore((s) => s.items.some((m) => m.id === movie.id))
const add = useWishlistStore((s) => s.add)
const remove = useWishlistStore((s) => s.remove)


return (
<button
className={`btn ${exists ? 'btn--secondary' : 'btn--primary'}`}
onClick={() => (exists ? remove(movie.id) : add(movie))}
>
{exists ? 'Remove from wish list' : 'Add to wish list'}
</button>
)
}