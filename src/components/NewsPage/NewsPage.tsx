import { useParams } from 'react-router-dom';
import {
  NewsBox,
  StyledImage,
  StyledArticle,
  StyledTitle,
} from './NewsPage.css';
import { useContext } from 'react';
import { ApiContext } from 'context/ApiContext/ApiContext';

export const NewsPage = () => {
  const { news } = useContext(ApiContext);
  const { newsId } = useParams();

  let clickedNews: any[] = [];
  if (newsId) {
    clickedNews = news.filter((item: any, i) => i.toString() === newsId);
  }

  return (
    <>
      {clickedNews.map((item, i) => (
        <NewsBox key={i}>
          <StyledImage src={item.urlToImage} alt="newsImage" />
          <StyledTitle>{item.title}</StyledTitle>
          <StyledArticle>{item.content.toString()}</StyledArticle>
        </NewsBox>
      ))}
    </>
  );
};
