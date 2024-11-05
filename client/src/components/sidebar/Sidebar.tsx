import {Home, Settings} from 'lucide-react';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Luca's Version </SidebarGroupLabel>
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
              <AvatarImage src='/path-to-avatar.jpg' alt='User Avatar' />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <span className='text-sm font-medium'>UserName</span>
          </div>
          <div className='flex items-center'>
            <Select>
              <SelectTrigger className='w-32'>
                <SelectValue placeholder='Language' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='en'>English</SelectItem>
                <SelectItem value='es'>Spanish</SelectItem>
                <SelectItem value='fr'>French</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
