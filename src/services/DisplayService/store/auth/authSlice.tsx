import { createSlice } from '@reduxjs/toolkit';
import { Iauth } from './authInterface';

// const checkUser =
//   sessionStorage.getItem('user') !== null ? JSON.parse(sessionStorage.getItem('user')) : null;

const base: Iauth = {
  //   user: checkUser,
  firstName: '',
  lastName: '',
  email: '',
  address1: '',
  address2: [
    {
      city: '',
      state: '',
      zip: '',
    },
  ],
  phone: '',
  jobTitle: '',
  reason: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: base,
  reducers: {
    setStates: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setStates } = authSlice.actions;
