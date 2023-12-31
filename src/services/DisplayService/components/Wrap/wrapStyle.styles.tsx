import styled from 'styled-components';

export const WrapStyle = styled.main`
  width: 100%;
  min-height: 100vh;
  font-size: 1.5em;
  text-align: center;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (orientation: landscape) {
    padding: 4% 0%;
  }
`;
