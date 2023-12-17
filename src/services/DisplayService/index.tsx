import { FC } from 'react';
import { Router } from './router/router';
import { Provider } from 'react-redux';
import { store } from '../DisplayService/store/store';

const DisplayService: FC = () => {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
};

export default DisplayService;
