import styled from 'styled-components';
import { colors } from '../../helpers/colors';

export const FormStyle = styled.form`
  width: 96%;
  max-width: 600px;
  margin: 0 auto;

  h1 {
    border-bottom: 1px solid ${colors.neutral[300]};
    padding-bottom: 0.8em;
    font-size: 1.2em;
  }
`;
