import { FC } from 'react';
import { WrapForm } from '../../components/WrapForm';
import { WithLoader } from '../../components/WithLoader';
import { FormThreeHandleLogic } from './FormThreeLogic';

const FormThreePage: FC = () => {
  return (
    <WrapForm>
      <WithLoader HandleFormLogic={FormThreeHandleLogic} />
    </WrapForm>
  );
};

export default FormThreePage;
