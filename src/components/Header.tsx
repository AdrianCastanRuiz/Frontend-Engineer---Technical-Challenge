import { Link, NavLink } from 'react-router-dom'
import { useWishlistStore } from './../store/wishlist'
import './../styles/components/header.scss'

export default function Header() {
const count = useWishlistStore((s) => s.items.length)


return (
<header className="header">
<div className="container header__inner">
<Link to="/" className="header__brand">🎬 Movies</Link>
<nav className="header__nav">
<NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
<NavLink to="/wishlist" className={({ isActive }) => isActive ? 'active' : ''}>
Wishlist <span className="badge">{count}</span>
</NavLink>
</nav>
</div>
</header>
)
}