import { createBrowserRouter } from 'react-router-dom'

import { VacationLayout } from '@/pages/layout/vacation-layout'
import { Vacation } from '@/pages/vacation'
import { VacationManager } from '@/pages/vacation-manager'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <VacationLayout />,
    children: [
      {
        path: '/',
        element: <VacationManager />,
      },
      {
        path: '/vacation',
        element: <Vacation />,
      },
    ],
  },
])
