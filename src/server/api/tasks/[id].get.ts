import { faker } from '@faker-js/faker';

export default defineEventHandler((event) => {
    const { id } = event.context.params || {};
    
    if (!id) {
        return {
            statusCode: 400,
            body: {
                error: 'ID is required',
            },
        };
    }

    // Generate a fake task based on the ID
    const task = {
        id,
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
    };

    return task;
});