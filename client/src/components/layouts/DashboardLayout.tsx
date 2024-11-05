import {Outlet} from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default MainLayout;
