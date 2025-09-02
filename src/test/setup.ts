import '@testing-library/jest-dom/vitest'
import 'whatwg-fetch'
import { beforeAll, afterAll, afterEach, vi } from 'vitest'
import { server } from './server'


beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())


afterEach(() => {
localStorage.removeItem('wishlist-storage')
})


beforeAll(() => {
// @ts-expect-error jsdom no implementa scrollBy
Element.prototype.scrollBy = vi.fn()
})