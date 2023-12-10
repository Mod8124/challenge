import { styled } from 'styled-components';
import formImg from '../../assets/images/form1.jpg';
import formTwoImg from '../../assets/images/form2.jpg';
import formThreeImg from '../../assets/images/form3.jpg';
import { IwrapImage } from './index';

export const WrapImageStyle = styled.section<IwrapImage>`
  width: 100%;
  height: 100%;
  background-image: ${(props) =>
    props.image === 'form'
      ? `url(${formImg})`
      : props.image === 'form2'
      ? `url(${formTwoImg})`
      : `url(${formThreeImg})`};
  background-size: cover;
  background-position: center;
  background-repeat: none;
`;
