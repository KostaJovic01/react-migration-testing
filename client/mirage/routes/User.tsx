import {faker} from '@faker-js/faker';

export const User = (server) => {
  // Route to get the current user
  server.get('/me', () => {
    return {
      user: {
        id: faker.number.int({min: 1, max: 100}),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        language: faker.helpers.arrayElement(['en', 'fr', 'es', 'de']),
      },
    };
  });
};
