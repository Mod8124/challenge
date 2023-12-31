import { FC } from 'react';
import { ErrorStyle } from './ErrorStyle';

interface Ierror {
  error: any;
}

export const Error: FC<Ierror> = ({ error }) => {
  return <ErrorStyle>{error}</ErrorStyle>;
};
