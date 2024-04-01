import { createBrowserRouter } from 'react-router-dom'

import { PlanLayout } from '@/pages/layouts/plan-layout'
import { VacationLayout } from '@/pages/layouts/vacation-layout'
import { Plans } from '@/pages/plans/ plans'
import { VacationPlanRegistration } from '@/pages/vacation-plan-registration'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <VacationLayout />,
    children: [
      {
        path: '/',
        element: <VacationPlanRegistration />,
      },
    ],
  },
  {
    path: '/',
    element: <PlanLayout />,
    children: [
      {
        path: '/plans',
        element: <Plans />,
      },
    ],
  },
])
