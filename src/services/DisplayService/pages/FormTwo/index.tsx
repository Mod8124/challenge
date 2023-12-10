import { FC } from 'react';
import { Wrap } from '../../components/Wrap';
import { WrapImage } from '../../components/WrapImage';

const FormTwoPage: FC = () => {
  return (
    <Wrap>
      <WrapImage image='form3' />
      <section>
        <h1>form2</h1>
      </section>
    </Wrap>
  );
};

export default FormTwoPage;
