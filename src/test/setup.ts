import '@testing-library/jest-dom/vitest'
import 'whatwg-fetch'
import { beforeAll, afterAll, afterEach, vi } from 'vitest'
import { server } from './server'


// Arrancar/Parar MSW
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())


// Limpiar localStorage (persist de Zustand)
afterEach(() => {
localStorage.removeItem('wishlist-storage')
})


// Mock de scrollBy para el carrusel
beforeAll(() => {
// @ts-expect-error jsdom no implementa scrollBy
Element.prototype.scrollBy = vi.fn()
})