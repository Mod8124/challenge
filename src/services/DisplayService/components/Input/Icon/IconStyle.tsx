import styled, { css } from 'styled-components';
import { colors } from '../../../helpers/colors';

interface IDivIcon {
  option?: boolean;
}

export const DivIconStyle = styled.div<IDivIcon>`
  position: absolute;
  right: 3%;
  top: 14px;
  color: ${colors.neutral[500]};
  font-size: 0.9em;

  ${({ option }) =>
    option &&
    css`
      cursor: pointer;
    `};
`;
