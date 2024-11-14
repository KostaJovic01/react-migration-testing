import {LocalUserInfo} from '@/types/allTypes';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

export const useLocalUserInfo = create(
  persist(
    (set) => ({
      localUserInfo: {
        id: '',
        language: 'de',
      },
      //Add setUserLanguage
      setUserLanguage: (language: string) =>
        set((state: LocalUserInfo) => ({
          localUserInfo: {
            ...state,
            language,
          },
        })),
      setUser: (newUser: LocalUserInfo) => set({user: newUser}),
      clearUser: () =>
        set({
          localUserInfo: {
            id: '',
            language: '',
          },
        }),
    }),
    {
      name: 'user-info-storage', // unique name for storage item
      storage: createJSONStorage(() => sessionStorage), // or localStorage as needed
    },
  ),
);
