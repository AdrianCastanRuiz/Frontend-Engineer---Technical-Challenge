import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { MovieSummary } from 'src/types/movie'

interface WishlistState {
items: MovieSummary[]
add: (m: MovieSummary) => void
remove: (id: number) => void
clear: () => void
}


export const useWishlistStore = create<WishlistState>()(
persist(
(set, get) => ({
items: [],
add: (m) => {
if (get().items.some((i) => i.id === m.id)) return
set((s) => ({ items: [m, ...s.items] }))
},
remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
clear: () => set({ items: [] }),
}),
{ name: 'wishlist-storage' }
)
)