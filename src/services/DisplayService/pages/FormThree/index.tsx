import { FC } from 'react';
import { Wrap } from '../../components/Wrap';
import { WrapImage } from '../../components/WrapImage';

const FormThreePage: FC = () => {
  return (
    <Wrap>
      <WrapImage image='form2' />
      <section>
        <h1>form3</h1>
      </section>
    </Wrap>
  );
};

export default FormThreePage;
