import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Inquiries from '@/pages/Inquiries/Inquiries';
import Layout from '../components/layouts/Layout';
import {startMirageServer} from '../../mirage/config';
import InquiryDetails from '@/pages/Inquiries/Detail/Detail';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import '@/i18n';
import {Settings} from '@/pages/Settings/Settings';

const queryClient = new QueryClient();

function App() {
  startMirageServer();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<Inquiries />} />
        <Route
          path='/inquiries/:inquiryId'
          element={
            <Inquiries>
              <InquiryDetails tabIndex={0} />
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
        <Route path='/settings' element={<Settings />} />
      </Route>,
    ),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
