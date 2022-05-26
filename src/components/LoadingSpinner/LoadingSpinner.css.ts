import styled from 'styled-components';

export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 10px 0;
  width: 100%;
`;

export const Loader = styled.span`
  border: 9px solid ${({ theme }) => theme.color.shadow};
  border-top: 9px solid ${({ theme }) => theme.color.primaryColor};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s cubic-bezier(0.78, 0.17, 0.27, 0.92) infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
