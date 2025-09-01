import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Wishlist from './pages/WishList'

const router = createBrowserRouter([
{
path: '/',
element: <App />,
children: [
{ index: true, element: <Home /> },
{ path: 'movie/:id', element: <MovieDetail /> },
{ path: 'wishlist', element: <Wishlist /> },
],
},
])


export default router