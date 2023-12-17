import styled from 'styled-components';
import { colors } from '../../helpers/colors';

interface IIcon {
  $location: string;
  name: string;
}

export const ShowStepStyle = styled.header`
  padding-bottom: 2em;
  position: relative;
  max-width: 478px;
  width: 96%;
  overflow: hidden;
`;

export const LineStyle = styled.div`
  position: absolute;
  width: 80%;
  top: 10%;
  left: 11%;
  border: 2px solid ${colors.neutral[300]};
  border-style: dashed;
`;

export const ArticleContainerStyle = styled.article`
  display: flex;
  width: 100%;
  column-gap: 3em;
  justify-content: space-between;
  position: relative;
  z-index: 2;

  @media (min-width: 768px) {
    column-gap: 6em;
  }
`;

export const ContainerStepStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  row-gap: 0.4em;

  p {
    color: ${colors.neutral[500]};
  }
`;

export const IconStyle = styled.div<IIcon>`
  color: ${(props) => (props.$location === props.name ? colors.primary[700] : colors.primary[300])};
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
`;
