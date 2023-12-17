import { FC } from 'react';
import { FormStyle } from './form.style';
import { UseFormHandleSubmit, SubmitHandler } from 'react-hook-form';
import { IForm } from '../../validations/interface.validations';
interface Iform {
  children: React.ReactNode;
  handleSubmit: UseFormHandleSubmit<IForm>;
  onSubmit: SubmitHandler<IForm>;
  title: string;
}

export const Form: FC<Iform> = ({ children, title, handleSubmit, onSubmit }) => {
  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <h1>{title}</h1>
      {children}
    </FormStyle>
  );
};
