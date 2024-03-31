import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="vacation-theme" defaultTheme="light">
        <Helmet titleTemplate="%s | vacation.planner" />
        <Toaster richColors position="top-right" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
