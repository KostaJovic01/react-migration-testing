import {create} from 'zustand';
import {User} from '@/types/allTypes';
import { useQuery } from '@tanstack/react-query';


//This is not needed because it comes from backend, react query already persists our data.
//We should use this only if we want persitent data that does not come from the backend
export const useUserStore = create((set) => ({
  user: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
  },
  setUser: (newUser: User) => set({user: newUser}),
  fetchUser: async () => {
    const response = await fetch(`/api/me}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    set({user: data.user});
  },
  clearUser: () =>
    set({
      user: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        language: '',
      },
    }),
}));

//We use this state management tool for persistent data that comes from the backend
export function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await fetch('/api/me');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data?.user ?? [];
    },
  });
}
