import { FC } from 'react';
import { WrapImageStyle } from './wrapImageStyle.style';

export interface IwrapImage {
  image: string;
}

export const WrapImage: FC<IwrapImage> = ({ image }) => <WrapImageStyle image={image} />;
