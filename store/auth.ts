import { create } from 'zustand';
import { User, AuthState } from '../types/user';

interface AuthStore extends AuthState {
  login: (user: User) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  login: (user: User) => set({
    user,
    isAuthenticated: true,
    isLoading: false,
  }),

  logout: () => set({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  }),

  setLoading: (loading: boolean) => set({ isLoading: loading }),
}));
