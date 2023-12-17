import { FC, useEffect } from 'react';
import { Route } from 'wouter';
import FormPage from '../../DisplayService/pages/Form';
import FormTwoPage from '../../DisplayService/pages/FormTwo';
import FormThreePage from '../../DisplayService/pages/FormThree';
import ThanksPage from '../../DisplayService/pages/Thanks';
import { useAppDispatch } from '../hooks/useStore';
import { getData } from '../store/data/thunk';
import { ShowStep } from '../components/ShowStep';
import { Wrap } from '../components/Wrap';
import { useLocation } from 'wouter';

export const Router: FC = () => {
  const dispatch = useAppDispatch();
  const [location] = useLocation();

  // request data
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <Wrap>
      {location !== '/thanks' && <ShowStep />}
      <Route path='/' component={FormPage}></Route>
      <Route path='/step2' component={FormTwoPage}></Route>
      <Route path='/step3' component={FormThreePage}></Route>
      <Route path='/thanks' component={ThanksPage}></Route>
    </Wrap>
  );
};
