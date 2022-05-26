import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 2px solid ${({ theme }) => theme.color.primaryColor};
  box-shadow: 0 2px 10px ${({ theme }) => theme.color.shadow};
  z-index: 10;
`;

export const HeaderNameLink = styled(NavLink)`
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
  letter-spacing: 0.8px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
`;

export const HeaderName = styled.p`
  color: ${({ theme }) => theme.color.black};
`;

export const HeaderNamePlayz = styled.span`
  color: ${({ theme }) => theme.color.primaryColor};
`;
