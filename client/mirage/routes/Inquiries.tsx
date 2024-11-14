import {faker} from '@faker-js/faker';
import {Response} from 'miragejs';

export const Inquiries = (server) => {
  // Route to get a list of inquiries
  server.get('/inquiries', (schema) => {
    return schema.inquiries.all();

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
        status: faker.helpers.arrayElement(['approved', 'pending', 'error']),
        createdAt: faker.date.recent().toISOString(),
      })),
    };
  });

  // Route to get a single inquiry by ID

  server.get('/inquiries/:id', (schema, request) => {
    const {id} = request.params;
    return schema.inquiries.find(id);
  });

  // Route to create a new inquiry
  server.post('/inquiries', (schema, request) => {
    const attrs = JSON.parse(request.requestBody);

    const combinedData = {
      title: faker.lorem.sentence({min: 2, max: 4}),
      language: attrs.language,
      text: faker.datatype.boolean() ? faker.lorem.paragraph() : undefined,
      person: {
        name: attrs.firstName + ' ' + attrs.lastName,
        email: attrs.email,
        phoneNumber: faker.phone.number(),
      },
      status: faker.helpers.arrayElement(['approved', 'pending', 'error']),
      createdAt: faker.date.recent().toISOString(),
    };

    const newInquiry = schema.inquiries.create(combinedData);
    return {inquiries: newInquiry};
  });

  server.delete('/inquiries/:id', (schema, request) => {
    const id = request.params.id;
    schema.inquiries.find(id)?.destroy();
    return {message: `Inquiry ${id} deleted successfully`};
  });

  server.put('/inquiries/:id', (schema, request) => {
    if (Math.random() < 0.5) {
      return new Response(404);
    }
    const {id} = request.params;
    const attrs = JSON.parse(request.requestBody);
    return schema.inquiries.find(id).update(attrs);
  });
};
