import { FaUserCircle } from 'react-icons/fa';
import { SiMaplibre } from 'react-icons/si';
import { GoCheckCircleFill } from 'react-icons/go';

export interface IiconStep {
  icon: JSX.Element;
  name: string;
  url: string;
}

export const iconsSteps: IiconStep[] = [
  {
    url: '/',
    icon: <FaUserCircle />,
    name: 'About',
  },
  { url: '/step2', icon: <SiMaplibre />, name: 'Address' },
  { url: '/step3', icon: <GoCheckCircleFill />, name: 'Info' },
];
