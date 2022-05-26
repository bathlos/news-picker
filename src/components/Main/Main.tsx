import { LoadingSpinner } from 'components/LoadingSpinner/LoadingSpinner';
import { ApiContext } from 'context/ApiContext/ApiContext';
import { useContext } from 'react';
import { MainBackground, MainPage } from './Main.css';
import { MainProps } from './types';

export const Main = ({ children }: MainProps) => {
  const { isLoading } = useContext(ApiContext);

  return (
    <MainBackground>
      <MainPage>
        {children}
        {isLoading && <LoadingSpinner />}
      </MainPage>
    </MainBackground>
  );
};
