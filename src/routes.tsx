import { createBrowserRouter } from 'react-router-dom'

import { PlanLayout } from '@/pages/layouts/plan-layout'
import { Plans } from '@/pages/plans/ plans'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PlanLayout />,
    children: [
      {
        path: '/',
        element: <Plans />,
      },
    ],
  },
])
