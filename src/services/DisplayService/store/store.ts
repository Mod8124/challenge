import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { dataSlice } from './data/dataSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    data: dataSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
