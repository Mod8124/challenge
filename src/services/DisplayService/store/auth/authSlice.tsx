import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Iauth } from './authInterface';

const userBase: Iauth = {
  firstName: '',
  lastName: '',
  email: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
  phone: '',
  jobTitle: '',
  reason: '',
  thanks: false,
};

const userFromSessionStorage = sessionStorage.getItem('user');

const checkUser = userFromSessionStorage !== null ? JSON.parse(userFromSessionStorage) : userBase;

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: checkUser,
  reducers: {
    setStates: (state, action: PayloadAction<Iauth>) => {
      const data = { ...state, ...action.payload };
      const userString = JSON.stringify(data);
      sessionStorage.setItem('user', userString);
      return data;
    },
  },
});

export const { setStates } = authSlice.actions;
