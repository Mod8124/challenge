import { FC, useEffect, useState } from 'react';
import { ThanksStyle } from './ThanksStyle';
import Confetti from 'react-confetti';
import { useLocation } from 'wouter';
import { useAuthStore } from '../../hooks/useAuth';

const ThanksPage: FC = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const { firstName, lastName } = useAuthStore();
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  setTimeout(() => {
    navigate('/');
  }, 5500);

  return (
    <>
      <ThanksStyle>
        Thanks for your time {firstName} {lastName}{' '}
      </ThanksStyle>
      <Confetti width={size.width} height={size.height} />
    </>
  );
};

export default ThanksPage;
