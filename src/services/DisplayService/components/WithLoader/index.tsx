import { useDataStore } from '../../hooks/useData';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FC } from 'react';
import { WithLoaderStyled } from './WithLoader.style';
import { HandleForm } from '../HandleForm/';

import {
  UseFormRegister,
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormGetValues,
} from 'react-hook-form';

interface HandleFormLogic<T extends FieldValues> {
  register: UseFormRegister<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  errors: FieldErrors<T>;
  getValues: UseFormGetValues<T>;
  onSubmit: (data: T) => void; // Update the data type to match T
}

interface IHandleForm<T extends FieldValues> {
  HandleFormLogic: () => HandleFormLogic<T>;
}

export const WithLoader: FC<IHandleForm<any>> = ({ HandleFormLogic }) => {
  const { isLoading } = useDataStore();

  if (isLoading) {
    return (
      <WithLoaderStyled>
        <h2>cargando</h2>
        <AiOutlineLoading3Quarters />
      </WithLoaderStyled>
    );
  }

  return <HandleForm HandleFormLogic={HandleFormLogic} />;
};
