import { describe, it, expect } from 'vitest'
import { useWishlistStore } from '../../store/wishlist'


describe('wishlist store', () => {
it('add / remove / clear', () => {
const { add, remove, clear, getState } = Object.assign({}, useWishlistStore.getState(), {
add: useWishlistStore.getState().add,
remove: useWishlistStore.getState().remove,
clear: useWishlistStore.getState().clear,
getState: useWishlistStore.getState,
})


add({ id: 99, title: 'X', poster_path: null, genre_ids: [], release_date: '2020-01-01' })
expect(useWishlistStore.getState().items).toHaveLength(1)


// evitar duplicados
add({ id: 99, title: 'X', poster_path: null, genre_ids: [], release_date: '2020-01-01' })
expect(useWishlistStore.getState().items).toHaveLength(1)


remove(99)
expect(useWishlistStore.getState().items).toHaveLength(0)


add({ id: 1, title: 'A', poster_path: null, genre_ids: [], release_date: '2020-01-01' })
clear()
expect(useWishlistStore.getState().items).toHaveLength(0)
})
})