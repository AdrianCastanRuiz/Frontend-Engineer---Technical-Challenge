import { screen } from '@testing-library/react'
import Wishlist from '../../pages/WishList'
import { renderWithProviders } from '../test-utils'
import { useWishlistStore } from '../../store/wishlist'
import { expect, it } from 'vitest'


it('muestra items de la wishlist', () => {
useWishlistStore.setState({
items: [
{ id: 1, title: 'Popular One', poster_path: '/p1.jpg', release_date: '2024-01-01', genre_ids: [28] },
],
add: useWishlistStore.getState().add,
remove: useWishlistStore.getState().remove,
clear: useWishlistStore.getState().clear,
})


renderWithProviders(<Wishlist />)
expect(screen.getByText(/popular one/i)).toBeInTheDocument()
})