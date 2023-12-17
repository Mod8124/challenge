import styled from 'styled-components';
import { colors } from '../../../helpers/colors';

interface Ierror {
  $erroractive: string;
  placeholder: string;
}

export const ContainerOptionsStyle = styled.div<Ierror>`
  position: absolute;
  width: 100%;
  min-height: 100%;
  left: 0;
  top: 5px;
  padding-left: 2%;
  border: 1px solid
    ${({ $erroractive }) => ($erroractive !== '' ? colors.alert.error : colors.neutral[500])};
  outline: none;
  text-align: start;
  font-size: 0.6em;

  p {
    padding-top: 2.2%;
    color: ${({ placeholder }) =>
      placeholder === 'Please select job title'
        ? colors.neutral[500]
        : colors.neutral[700]}; // Check against string 'true'
  }
`;

export const OptionsStyle = styled.div`
  position: absolute;
  height: 110%;
  top: 110%;
  left: 0;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  row-gap: 0.1em;
  z-index: 2;
`;
