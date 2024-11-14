import {LocalUserInfo, LocalUserInfoState} from '@/types/allTypes';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

export const useLocalUserInfo = create<LocalUserInfoState>()(
  persist(
    (set) => ({
      localUserInfo: {
        id: '',
        language: 'de',
      },
      // Add setUserLanguage
      setUserLanguage: (language) =>
        set((state) => ({
          localUserInfo: {
            ...state.localUserInfo,
            language,
          },
        })),
      setUser: (newUser: LocalUserInfo) =>
        set({
          localUserInfo: newUser,
        }),
      clearUser: () =>
        set({
          localUserInfo: {
            id: '',
            language: 'en',
          },
        }),
    }),
    {
      name: 'user-info-storage', // unique name for storage item
      storage: createJSONStorage(() => sessionStorage), // or localStorage as needed
    },
  ),
);
