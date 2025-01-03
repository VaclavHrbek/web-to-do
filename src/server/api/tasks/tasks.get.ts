import { faker } from '@faker-js/faker'

export default defineEventHandler((event) => {

    const tasks = []
    for (let i = 0; i < 10; i++) {
      tasks.push({
        id : i,
        title: faker.lorem.sentence(),
        descripiton: faker.lorem.paragraph()
      })
    }
    return tasks
  })
  