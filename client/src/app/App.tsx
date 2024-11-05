import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import DashboardLayout from '../components/layouts/Layout';
import Inquiries from '@/pages/Inquiries';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<DashboardLayout />}>
        <Route index element={<Inquiries />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
