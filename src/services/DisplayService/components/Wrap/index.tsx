import { FC } from 'react';
import { WrapStyle } from './wrapStyle.styles';

interface I {
  children: React.ReactNode;
}

export const Wrap: FC<I> = ({ children }) => {
  return <WrapStyle>{children}</WrapStyle>;
};
