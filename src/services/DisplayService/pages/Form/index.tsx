import { FC } from 'react';
import { Wrap } from '../../components/Wrap';
import { WrapImage } from '../../components/WrapImage';

const FormPage: FC = () => {
  return (
    <Wrap>
      <WrapImage image='form' />
      <section>
        <h1>form1</h1>
      </section>
    </Wrap>
  );
};

export default FormPage;
