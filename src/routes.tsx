import { createBrowserRouter } from 'react-router-dom'

import { VacationLayout } from '@/pages/layout/vacation-layout'
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
        path: '/vacation-plan',
        element: <VacationPlan />,
      },
    ],
  },
])
