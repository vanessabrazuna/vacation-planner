import { faker } from '@faker-js/faker'

export const plan = Array.from({ length: 7 }).map(() => {
  return {
    id: faker.number.int({ min: 1000, max: 2000 }),
    title: faker.lorem.words(1),
    description: faker.lorem.words(2),
    initialDate: faker.date.future(),
    finalDate: faker.date.future(),
    location: faker.location.city(),
    participants: faker.number.int({ min: 1, max: 10 }),
  }
})
