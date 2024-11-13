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
  {
    id: '2',
    title: 'Inquiry on Product Availability',
    language: 'en',
    text: 'Is this product available in stock?',
    person: {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      phoneNumber: '987-654-3210',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Feedback on Recent Purchase',
    language: 'en',
    text: 'I am very satisfied with the quality!',
    person: {
      name: 'Bob Johnson',
      email: 'bobjohnson@example.com',
      phoneNumber: '555-123-4567',
    },
    status: 'approved',
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Request for Invoice Copy',
    language: 'en',
    text: 'Could you please send me a copy of my invoice?',
    person: {
      name: 'Alice Brown',
      email: 'alicebrown@example.com',
      phoneNumber: '444-789-1234',
    },
    status: 'resolved',
    createdAt: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Technical Support Request',
    language: 'en',
    text: 'I am facing issues with login.',
    person: {
      name: 'Charlie Wilson',
      email: 'charliewilson@example.com',
      phoneNumber: '333-456-7890',
    },
    status: 'in_progress',
    createdAt: new Date().toISOString(),
  },
];
