export const Inquiries = (server) => {
  server.get('/inquiries', () => {
    return {
      inquiries: [
        {
          id: '1',
          name: 'Inquiry 1',
          status: 'pending',
          message: 'Question about product A',
        },
        {
          id: '2',
          name: 'Inquiry 2',
          status: 'resolved',
          message: 'Issue with order B',
        },
        {
          id: '3',
          name: 'Inquiry 3',
          status: 'pending',
          message: 'Question about pricing',
        },
        {
          id: '4',
          name: 'Inquiry 4',
          status: 'closed',
          message: 'Feedback on service',
        },
      ],
    };
  });

  server.get('/inquiries/:id', (schema, {params: {id}}) => {
    return {
      inquiry: {
        id,
        name: `Inquiry ${id}`,
        status: 'pending',
        message: `Message for inquiry ${id}`,
      },
    };
  });
};
