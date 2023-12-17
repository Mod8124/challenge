import { styled } from 'styled-components';
import { colors } from '../../../helpers/colors';

interface Ierror {
  erroractive: boolean;
}

export const TextareaStyle = styled.textarea<Ierror>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 5px;
  padding-left: 2%;
  padding-top: 2.2%;
  border: 1px solid ${({ erroractive }) => (erroractive ? colors.alert.error : colors.neutral[500])};
  outline: none;
  resize: none;
  transition: height 0.5s;

  &:focus,
  &:active {
    height: 170%;
  }
`;
