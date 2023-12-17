import { FC } from 'react';
import { WrapForm } from '../../../DisplayService/components/WrapForm';
import { WithLoader } from '../../components/WithLoader';
import { FormTwoHandleLogic } from './FormTwoHandleLogic';

const FormTwoPage: FC = () => {
  return (
    <WrapForm>
      <WithLoader HandleFormLogic={FormTwoHandleLogic} />
    </WrapForm>
  );
};

export default FormTwoPage;
