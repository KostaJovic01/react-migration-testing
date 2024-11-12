import {create} from 'zustand';
import {User} from '@/types/allTypes';
import { useQuery } from '@tanstack/react-query';

export const useUserStore = create((set) => ({
  user: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    language: '',
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
