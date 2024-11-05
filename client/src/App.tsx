import * as React from 'react';
import ReactQuery1 from './components/ReactQuery1';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQuery1 />
      </QueryClientProvider>
    </>
  );
}
