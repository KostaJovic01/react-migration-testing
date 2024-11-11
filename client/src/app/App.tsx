import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Inquiries from '@/pages/Inquiries';
import Layout from '../components/layouts/Layout';
import {startMirageServer} from '../../mirage/config';
import InquiryDetails from '@/pages/InquiriesDetail';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
  startMirageServer();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<Inquiries/>} />
        <Route
          path='/inquiries/:inquiryId'
          element={
            <Inquiries>
              <InquiryDetails tabIndex={0}/>
            </Inquiries>
          }
        />
        <Route
          path='/inquiries/:inquiryId/status'
          element={
            <Inquiries>
              <InquiryDetails tabIndex={1} />
            </Inquiries>
          }
        />
      </Route>,
    ),
  );

  return (
    <QueryClientProvider client={queryClient} id='query-client'>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
