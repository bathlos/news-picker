import {
  StyledContainer,
  StyledNews,
  StyledTitle,
  StyledDescription,
  StyledImg,
  StyledLink,
} from './News.css';
import { ApiContext } from 'context/ApiContext/ApiContext';
import { useContext, useEffect, useRef } from 'react';

export const News = () => {
  const { news, setCurrentPage } = useContext(ApiContext);
  let { currentPage } = useContext(ApiContext);
  const lastItemRef = useRef(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCurrentPage(++currentPage);
        }
      },
      { root: document, threshold: 1 },
    );

    if (lastItemRef.current) {
      observerRef.current.observe(lastItemRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [news]);

  const newsItems = news.map((data: any, i) => (
    <StyledLink to={i.toString()} key={i}>
      <StyledNews ref={i === news.length - 1 ? lastItemRef : null}>
        <StyledTitle>
          <h2>{data.title}</h2>
        </StyledTitle>
        <StyledImg src={data.urlToImage} alt="news image" />
        <StyledDescription>
          <p>{data.description}</p>
        </StyledDescription>
      </StyledNews>
    </StyledLink>
  ));

  return <StyledContainer>{newsItems}</StyledContainer>;
};
