// import { faker } from '@faker-js/faker'

// export const plan = Array.from({ length: 7 }).map(() => {
//   return {
//     id: faker.number.int({ min: 1000, max: 2000 }),
//     title: faker.lorem.words(1),
//     description: faker.lorem.words(2),
//     initialDate: faker.date.future(),
//     finalDate: faker.date.future(),
//     location: faker.location.city(),
//     participants: faker.number.int({ min: 1, max: 10 }),
//   }
// })

export async function getPlan() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    {
      id: 8374,
      title: 'testeTitle',
      description: 'testeDescription',
      initialDate: '2021-01-01',
      finalDate: '2021-01-01',
      location: 'testeLocation',
      participants: 1,
    },
    {
      id: 8375,
      title: 'testeTitle',
      description: 'testeDescription',
      initialDate: '2021-01-01',
      finalDate: '2021-01-01',
      location: 'testeLocation',
      participants: 9,
    },
    {
      id: 8376,
      title: 'testeTitle',
      description: 'testeDescription',
      initialDate: '2021-01-01',
      finalDate: '2021-01-01',
      location: 'testeLocation',
      participants: 2,
    },
    {
      id: 8377,
      title: 'testeTitle',
      description: 'testeDescription',
      initialDate: '2021-01-01',
      finalDate: '2021-01-01',
      location: 'testeLocation',
      participants: 1,
    },
    {
      id: 8378,
      title: 'testeTitle',
      description: 'testeDescription',
      initialDate: '2021-01-01',
      finalDate: '2021-01-01',
      location: 'testeLocation',
      participants: 7,
    },
    {
      id: 8379,
      title: 'testeTitle',
      description: 'testeDescription',
      initialDate: '2021-01-01',
      finalDate: '2021-01-01',
      location: 'testeLocation',
      participants: 4,
    },
    {
      id: 8380,
      title: 'testeTitle',
      description: 'testeDescription',
      initialDate: '2021-01-01',
      finalDate: '2021-01-01',
      location: 'testeLocation',
      participants: 3,
    },
  ]
}

interface CreatePlanRequest {
  // id?: number
  title: string
  description: string
  initialDate: string
  finalDate: string
  location: string
  participants: number
}

export async function createPlan(_: CreatePlanRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
}
