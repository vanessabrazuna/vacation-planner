import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | vacation.planner" />
      <Toaster richColors position="top-right" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
