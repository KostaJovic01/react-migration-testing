import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Inquiries from '@/pages/Inquiries';
import Layout from '../components/layouts/Layout';
import {startMirageServer} from '../../mirage/config';

function App() {
  startMirageServer();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<Inquiries />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
