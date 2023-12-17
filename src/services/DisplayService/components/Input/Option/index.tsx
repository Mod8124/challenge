import { FC } from 'react';
import { OptionStyle } from './OptionStyle';

interface Ioption {
  name: string;
}

export const Option: FC<Ioption> = ({ name }) => {
  return <OptionStyle>{name}</OptionStyle>;
};
