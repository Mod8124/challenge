import { FC } from 'react';
import { Tid } from '../../../store/data/dataInterface';
import { iconsFields } from '../../../helpers/iconsFields';
import { IoIosArrowDropup } from 'react-icons/io';
import { DivIconStyle } from './IconStyle';

interface Iicon {
  options?: string[];
  name: Tid;
  activeOptions: boolean;
  handleToggle: () => void;
}

export const Icon: FC<Iicon> = ({ options, name, activeOptions, handleToggle }) => {
  return (
    <DivIconStyle option={options && name === 'jobTitle'} onClick={handleToggle}>
      {(name && iconsFields[name].icon && name !== 'jobTitle') ?? iconsFields['default'].icon}
      {name === 'jobTitle' && activeOptions ? <IoIosArrowDropup /> : iconsFields[name].icon}
    </DivIconStyle>
  );
};
