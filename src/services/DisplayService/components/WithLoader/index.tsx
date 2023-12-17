import { FC } from 'react';
import { HandleForm } from '../HandleForm/';
import { useDataStore } from '../../hooks/useData';
import { WithLoaderStyled } from './WithLoader.style';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import {
  UseFormRegister,
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormSetValue,
  SubmitHandler,
} from 'react-hook-form';

interface HandleFormLogic<T extends FieldValues> {
  register: UseFormRegister<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  errors: FieldErrors<T>;
  setValue?: UseFormSetValue<T>;
  onSubmit: SubmitHandler<T>;
}

interface IHandleForm<T extends FieldValues> {
  HandleFormLogic: () => HandleFormLogic<T>;
}

export const WithLoader: FC<IHandleForm<any>> = ({ HandleFormLogic }) => {
  const { isLoading } = useDataStore();

  if (isLoading) {
    return (
      <WithLoaderStyled>
        <AiOutlineLoading3Quarters />
      </WithLoaderStyled>
    );
  }

  return <HandleForm HandleFormLogic={HandleFormLogic} />;
};
