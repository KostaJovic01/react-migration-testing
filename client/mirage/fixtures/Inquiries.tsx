// fixtures.js
export const inquiries = [
  {
    id: '1',
    title: 'Example Title',
    language: 'en',
    text: 'Sample paragraph text.',
    person: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '123-456-7890',
    },
    status: 'approved',
    createdAt: new Date().toISOString(),
  },
  // Add more sample inquiries as needed
];
