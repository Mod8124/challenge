import { FC, Fragment } from 'react';
import { Route } from 'wouter';
import FormPage from '../../DisplayService/pages/Form';
import FormTwoPage from '../../DisplayService/pages/FormTwo';
import FormThreePage from '../../DisplayService/pages/FormThree';
import ThanksPage from '../../DisplayService/pages/Thanks';

export const Router: FC = () => {
  return (
    <Fragment>
      {/* <Link href='/users/1'>
        <a className='link'>Profile</a>
      </Link> */}

      <Route path='/' component={FormPage}></Route>
      <Route path='/step2' component={FormTwoPage}></Route>
      <Route path='/step3' component={FormThreePage}></Route>
      <Route path='/thanks' component={ThanksPage}></Route>
    </Fragment>
  );
};
