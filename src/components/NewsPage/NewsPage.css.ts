import styled from 'styled-components';
import { device } from 'consts/media-queries';
import { opacityAnimation } from 'animations/opacityAnimation.css';

export const NewsBox = styled.div`
  margin: 30px;
  animation: ${opacityAnimation} 0.5s linear;

  @media ${device.tablet} {
    display: flex;
    align-content: center;
    flex-direction: column;
    margin: 0 30px;
  }
`;

export const StyledImage = styled.img`
  margin: 0 25px 15px 0;
  width: 600px;
  max-height: 500px;
  border-radius: 15px;
  float: left;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const StyledArticle = styled.article`
    margin-top 20px;
    text-align: justify;
    letter-spacing: .8px;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.color.primaryColor};

  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
