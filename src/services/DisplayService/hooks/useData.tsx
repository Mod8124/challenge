import { useAppSelector } from './useStore';

export const useDataStore = () => {
  const state = useAppSelector((state) => state.data);
  return state;
};
