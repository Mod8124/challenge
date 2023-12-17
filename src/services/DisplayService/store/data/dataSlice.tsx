import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IdataBase } from './dataInterface';

const base: IdataBase = {
  data: null,
  isLoading: false,
  errors: '',
};

export const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: base,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    setData(state, { payload }) {
      state.data = payload;
    },
    setErrors(state, action: PayloadAction<string>) {
      state.errors = action.payload;
    },
  },
});

export const { setIsLoading, setData, setErrors } = dataSlice.actions;
