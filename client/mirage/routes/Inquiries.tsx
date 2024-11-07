import {faker} from '@faker-js/faker';

export const Inquiries = (server) => {
  server.get('/inquiries', () => {
    return {
      inquiries: Array.from({length: 10}).map(() => ({
        id: faker.string.uuid(),
        title: faker.lorem.sentence(),
        language: faker.helpers.arrayElement(['en', 'fr', 'es', 'de']),
        text: faker.datatype.boolean() ? faker.lorem.paragraph() : undefined,
        person: {
          name: faker.name.fullName(),
          email: faker.internet.email(),
          phoneNumber: faker.phone.number(),
        },
        tracking: faker.datatype.boolean()
          ? {
              trackingId: faker.string.uuid(),
              status: faker.helpers.arrayElement([
                'in_transit',
                'delivered',
                'returned',
              ]),
            }
          : undefined,
        status: faker.helpers.arrayElement(['approved', 'pending', 'error']),
        createdAt: faker.date.recent().toISOString(),
        roomStays: faker.datatype.boolean()
          ? Array.from({length: faker.number.int({min: 1, max: 3})}).map(
              () => ({
                roomId: faker.string.uuid(),
                checkIn: faker.date.recent().toISOString(),
                checkOut: faker.date.soon().toISOString(),
              }),
            )
          : undefined,
        channelName: faker.datatype.boolean()
          ? faker.company.name()
          : undefined,
      })),
    };
  });
};
