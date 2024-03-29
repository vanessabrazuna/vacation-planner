import { createBrowserRouter } from 'react-router-dom'

import { PlanLayout } from '@/pages/layouts/plan-layout'
import { VacationLayout } from '@/pages/layouts/vacation-layout'
import { Plans } from '@/pages/plans/ plans'
import { VacationPlan } from '@/pages/vacation-plan'
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
      {
        path: '/vacation-plan', // dialog component
        element: <VacationPlan />,
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
