import {Outlet} from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import {SidebarProvider} from '../ui/sidebar';

const Layout = () => {
  return (
    <SidebarProvider>
      <Sidebar />
      <Outlet />
    </SidebarProvider>
  );
};

export default Layout;
