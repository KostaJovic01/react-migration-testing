import {Home, Settings} from 'lucide-react';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {useUser} from '@/stores/UserStore';
import {useLocalUserInfo} from '@/stores/LocalUserInfo';
import LanguageSelection from './LanguageSelection';

// Menu items.
const items = [
  {
    title: 'Inquiries',
    url: '/',
    icon: Home,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings,
  },
];

export default function AppSidebar() {
  const {data: user} = useUser();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            Luca's Version
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className='flex flex-col space-y-2'>
          <div className='flex items-center gap-2'>
            <Avatar>
              <AvatarImage
                src={`https://i.pravatar.cc/${user?.id}`}
                alt={user?.firstName}
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <span className='text-sm font-medium'>{`${user?.firstName} ${user?.lastName}`}</span>
          </div>
          <div className='flex justify-center'>
            <LanguageSelection />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
