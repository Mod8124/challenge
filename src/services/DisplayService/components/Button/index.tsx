import { FC } from 'react';
import { ButtonStyle, ButtonContainerStyled } from './button.style';

interface Ibutton {
  children: React.ReactNode;
  isDisabled: boolean;
}

export const Button: FC<Ibutton> = ({ children, isDisabled }) => {
  return (
    <ButtonContainerStyled>
      <ButtonStyle disabled={isDisabled}>{children}</ButtonStyle>
    </ButtonContainerStyled>
  );
};
