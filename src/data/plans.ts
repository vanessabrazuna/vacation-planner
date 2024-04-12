export interface Plan {
  id: 'string'
  title: string
  description: string
  initialDate: string
  finalDate: string
  location: string
  participants: number
}

interface GetPlansFilters {
  id: string | null
  title: string | null
}

export async function getPlan({ id, title }: GetPlansFilters) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  let plans = [
    {
      id: '8374',
      title: 'testeTitle',
      description: 'testeDescription',
      initialDate: '2021-01-01',
      finalDate: '2021-01-01',
      location: 'testeLocation',
      participants: 1,
    },
    {
      id: '8375',
      title: 'testeTitle',
      description: 'testeDescription',
      initialDate: '2021-01-01',
      finalDate: '2021-01-01',
      location: 'testeLocation',
      participants: 9,
    },
    {
      id: '8376',
      title: 'testeTitle',
      description: 'testeDescription',
      initialDate: '2021-01-01',
      finalDate: '2021-01-01',
      location: 'testeLocation',
      participants: 2,
    },
    {
      id: '8377',
      title: 'testeTitle',
      description: 'testeDescription',
      initialDate: '2021-01-01',
      finalDate: '2021-01-01',
      location: 'testeLocation',
      participants: 1,
    },
    {
      id: '8378',
      title: 'testeTitle',
      description: 'testeDescription',
      initialDate: '2021-01-01',
      finalDate: '2021-01-01',
      location: 'testeLocation',
      participants: 7,
    },
    {
      id: '8379',
      title: 'testeTitle',
      description: 'testeDescription',
      initialDate: '2021-01-01',
      finalDate: '2021-01-01',
      location: 'testeLocation',
      participants: 4,
    },
  ]

  if (id) {
    plans = plans.filter((plan) => plan.id.includes(id))
  }

  if (title) {
    plans = plans.filter((plan) => plan.title.includes(title))
  }

  return plans
}

interface CreatePlanRequest {
  title: string
  description: string
  initialDate: string
  finalDate: string
  location: string
  participants: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createPlan(_: CreatePlanRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
}
