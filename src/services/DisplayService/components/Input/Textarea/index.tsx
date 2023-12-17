import { FC } from 'react';
import { TextareaStyle } from './TextareaStyle';
import { UseFormRegister } from 'react-hook-form';
import { Tid } from '../../../store/data/dataInterface';
import { IForm } from '../../../validations/interface.validations';

interface Itextarea {
  placeholder: string;
  register: UseFormRegister<IForm>;
  error: any;
  name: Tid;
  defaultValue: string;
}

export const Textarea: FC<Itextarea> = ({ placeholder, register, error, name, defaultValue }) => {
  return (
    <TextareaStyle
      defaultValue={defaultValue}
      placeholder={placeholder}
      {...register(name)}
      $erroractive={error}
    ></TextareaStyle>
  );
};
