import { useAppSelector } from './useStore';

export const useAuthStore = () => {
  const state = useAppSelector((state) => state.auth);
  return state;
};
