import { useWishlistStore } from './../store/wishlist'
import MovieCard from './../components/MovieCard'
import './../styles/components/wishlist.scss'


export default function Wishlist() {
const items = useWishlistStore((s) => s.items)


return (
<section className="wishlist">
<h1>Wish list</h1>
{items.length === 0 ? (
<p>No items yet. Add movies from the detail page.</p>
) : (
<div className="wishlist__grid">
{items.map((m) => (
<MovieCard key={m.id} movie={m} />
))}
</div>
)}
</section>
)
}