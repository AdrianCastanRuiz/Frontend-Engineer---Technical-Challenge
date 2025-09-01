import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MovieDetail from '../../pages/MovieDetail'
import { renderWithRoutes } from '../test-utils'
import { expect, it } from 'vitest'


it('muestra detalle y permite añadir/quitar de la wishlist', async () => {
renderWithRoutes(<MovieDetail />, '/movie/:id', '/movie/1')


await waitFor(() => {
expect(screen.getByRole('heading', { name: /popular one/i })).toBeInTheDocument()
})


const button = screen.getByRole('button', { name: /add to wish list/i })
await userEvent.click(button)


expect(screen.getByRole('button', { name: /remove from wish list/i })).toBeInTheDocument()
})