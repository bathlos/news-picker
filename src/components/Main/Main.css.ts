import styled from 'styled-components';
import background from '../../assets/earth.jpg';

export const MainBackground = styled.div`
  position: absolute;
  top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const MainPage = styled.main`
  display: grid;
  justify-content: space-around;
  padding: 20px 5px;
  width: 1050px;
  min-height: calc(100vh - 60px);
  background-color: ${({ theme }) => theme.color.white};
`;
