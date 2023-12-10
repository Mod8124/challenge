import { FC } from 'react';

interface Ierror {
  children;
}

export const Error: FC<Ierror> = ({ children }) => {
  return (
    <p data-testid='error' className='w-full text-alert-error min-h-[20px] py-1 text-start'>
      {children}
    </p>
  );
};
