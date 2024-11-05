import Sidebar from '../sidebar/Sidebar';
import {SidebarProvider, SidebarTrigger} from '../ui/sidebar';

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <SidebarProvider>
      <Sidebar />
      <main>{children}</main>
    </SidebarProvider>
  );
};

export default MainLayout;
