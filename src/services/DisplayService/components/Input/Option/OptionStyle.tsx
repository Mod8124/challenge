import { styled } from 'styled-components';
import { colors } from '../../../helpers/colors';

export const OptionStyle = styled.button`
  background: ${colors.white};
  border: none;
  border: 1px solid ${colors.neutral[500]};
  padding: 4% 3.1%;
  text-align: start;
  width: 110%;
  color: ${colors.neutral[700]};
  cursor: pointer;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;
