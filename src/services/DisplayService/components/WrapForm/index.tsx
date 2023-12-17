import { FC } from 'react';
import { WrapFormStyled } from './wrapForm.style';

interface IwrapForm {
  children: React.ReactNode;
}

export const WrapForm: FC<IwrapForm> = ({ children }) => {
  return <WrapFormStyled>{children}</WrapFormStyled>;
};
