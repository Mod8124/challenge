import styled from 'styled-components';
import { colors } from '../../helpers/colors';

export const ButtonContainerStyled = styled.div`
  width: 100%;
  margin-top: 1.6em;
  border-top: 1px solid ${colors.neutral[300]};
  display: flex;
  justify-content: flex-end;
`;

export const ButtonStyle = styled.button`
  width: 100%;
  max-width: 180px;
  min-height: 45px;
  margin-top: 1em;
  color: ${colors.white};
  background: ${colors.primary[500]};
  border: none;
  font-size: 0.7em;
  transition: background 0.5s;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: ${colors.primary[300]};
  }
`;
