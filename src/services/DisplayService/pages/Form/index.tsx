import { FC } from 'react';
import { WrapForm } from '../../../DisplayService/components/WrapForm';
import { WithLoader } from '../../components/WithLoader';
import { FormHandleLogic } from './FormHandleLogic';

const FormPage: FC = () => {
  return (
    <WrapForm>
      <WithLoader HandleFormLogic={FormHandleLogic} />
    </WrapForm>
  );
};

export default FormPage;
