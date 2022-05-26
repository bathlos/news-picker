import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from 'consts/media-queries';
import { opacityAnimation } from 'animations/opacityAnimation.css';

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 20px;

  @media ${device.mobileXL} {
    grid-template-columns: 1fr;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledNews = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 470px;
  height: 600px;
  background-color: ${({ theme }) => theme.color.dirtyWhite};
  border: 0.5px solid ${({ theme }) => theme.color.primaryColor};
  border-radius: 15px 15px 0 0;
  box-shadow: 2px 5px 20px -4px ${({ theme }) => theme.color.darkShadow};
  text-align: justify;
  cursor: pointer;
  overflow: hidden;
  animation: ${opacityAnimation} 0.5s linear;

  @media ${device.mobileXL} {
    max-width: 650px;
    height: auto;
  }
`;

export const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  height: 25%;
  color: ${({ theme }) => theme.color.dirtyWhite};
  background-color: ${({ theme }) => theme.color.primaryColor};
  text-align: center;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 45%;
`;

export const StyledDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  padding: 0 25px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.black};

  @media ${device.mobileXL} {
    padding: 40px 30px;
  }
`;
