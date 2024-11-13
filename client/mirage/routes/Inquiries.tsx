import {faker} from '@faker-js/faker';

export const Inquiries = (server) => {
  // Route to get a list of inquiries
  server.get('/inquiries', () => {
    return {
      inquiries: Array.from({length: 10}).map(() => ({
        id: faker.string.uuid(),
        title: faker.lorem.sentence({min: 2, max: 4}),
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

  // Route to get a single inquiry by ID
  server.get('/inquiries/:id', (schema, request) => {
    const {id} = request.params;
    const inquiry = {
      id,
      title: faker.lorem.sentence({min: 2, max: 4}),
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
        ? Array.from({length: faker.number.int({min: 1, max: 3})}).map(() => ({
            roomId: faker.string.uuid(),
            checkIn: faker.date.recent().toISOString(),
            checkOut: faker.date.soon().toISOString(),
          }))
        : undefined,
      channelName: faker.datatype.boolean() ? faker.company.name() : undefined,
    };

    return {inquiry};
  });

  // Route to create a new inquiry
  server.post('/inquiries', (schema, request) => {
    const attrs = JSON.parse(request.requestBody);

    const newInquiry = {
      id: faker.string.uuid(),
      title: attrs.title || faker.lorem.sentence({min: 2, max: 4}),
      language:
        attrs.language || faker.helpers.arrayElement(['en', 'fr', 'es', 'de']),
      text:
        attrs.text ||
        (faker.datatype.boolean() ? faker.lorem.paragraph() : undefined),
      person: {
        name: attrs.person?.name || faker.name.fullName(),
        email: attrs.person?.email || faker.internet.email(),
        phoneNumber: attrs.person?.phoneNumber || faker.phone.number(),
      },
      tracking:
        attrs.tracking ||
        (faker.datatype.boolean()
          ? {
              trackingId: faker.string.uuid(),
              status: faker.helpers.arrayElement([
                'in_transit',
                'delivered',
                'returned',
              ]),
            }
          : undefined),
      status:
        attrs.status ||
        faker.helpers.arrayElement(['approved', 'pending', 'error']),
      createdAt: attrs.createdAt || faker.date.recent().toISOString(),
      roomStays:
        attrs.roomStays ||
        (faker.datatype.boolean()
          ? Array.from({length: faker.number.int({min: 1, max: 3})}).map(
              () => ({
                roomId: faker.string.uuid(),
                checkIn: faker.date.recent().toISOString(),
                checkOut: faker.date.soon().toISOString(),
              }),
            )
          : undefined),
      channelName:
        attrs.channelName ||
        (faker.datatype.boolean() ? faker.company.name() : undefined),
    };

    return {inquiry: newInquiry};
  });

  server.delete('/inquiries/:id', (schema, request) => {
    const id = request.params.id;
    //schema.inquiries.find(id)?.destroy();
    return {message: `Inquiry ${id} deleted successfully`};
  });

  server.put('/inquiries/:id', (schema, request) => {
    const {id} = request.params;
    const inquiry = {
      id,
      title: faker.lorem.sentence({min: 2, max: 4}),
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
        ? Array.from({length: faker.number.int({min: 1, max: 3})}).map(() => ({
            roomId: faker.string.uuid(),
            checkIn: faker.date.recent().toISOString(),
            checkOut: faker.date.soon().toISOString(),
          }))
        : undefined,
      channelName: faker.datatype.boolean() ? faker.company.name() : undefined,
    };

    return {inquiry};
  });
};
