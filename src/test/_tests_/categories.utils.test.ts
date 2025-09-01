import { categoryFromGenres } from '../../utils/categories'
import { describe, it, expect } from 'vitest'


describe('categoryFromGenres', () => {
it('prioriza action sobre comedy y drama', () => {
expect(categoryFromGenres([28, 35])).toBe('action')
})
it('detecta comedy', () => {
expect(categoryFromGenres([35])).toBe('comedy')
})
it('fallback a drama', () => {
expect(categoryFromGenres([18])).toBe('drama')
})
})