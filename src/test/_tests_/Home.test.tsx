import { screen } from '@testing-library/react'
import Home from '../../pages/Home'
import { renderWithProviders } from '../test-utils'
import { expect, it } from 'vitest'

it('renderiza los 3 carruseles y carga tarjetas', async () => {
  renderWithProviders(<Home />)

  expect(
  await screen.findByRole('heading', { name: /popular/i, level: 2 })
).toBeInTheDocument()
expect(
  await screen.findByRole('heading', { name: /top rated/i, level: 2 })
).toBeInTheDocument()
expect(
  await screen.findByRole('heading', { name: /upcoming/i, level: 2 })
).toBeInTheDocument()

const links = await screen.findAllByRole('link', { name: /open/i })
expect(links.length).toBeGreaterThan(0)
})
