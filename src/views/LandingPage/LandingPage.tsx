import { Outlet, useParams } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Main } from 'components/Main/Main';
import { News } from 'components/News/News';
import { useContext, useMemo } from 'react';
import { ApiContext } from 'context/ApiContext/ApiContext';

export const LandingPage = () => {
  const { newsId } = useParams();
  const { news } = useContext(ApiContext);

  const handleShowComponents = useMemo(() => {
    if (news.length) {
      return !newsId ? <News /> : <Outlet />;
    }
  }, [news, newsId]);

  return (
    <>
      <Header />
      <Main>{handleShowComponents}</Main>
    </>
  );
};
