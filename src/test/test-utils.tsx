import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import type { ReactElement } from 'react'


export function renderWithProviders(ui: ReactElement, { route = '/' } = {}) {
const queryClient = new QueryClient({
defaultOptions: { queries: { retry: false } },
})


return render(
<QueryClientProvider client={queryClient}>
<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
</QueryClientProvider>
)
}


export function renderWithRoutes(element: ReactElement, path: string, route: string) {
const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } })
return render(
<QueryClientProvider client={queryClient}>
<MemoryRouter initialEntries={[route]}>
<Routes>
<Route path={path} element={element} />
</Routes>
</MemoryRouter>
</QueryClientProvider>
)
}