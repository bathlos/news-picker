import { createContext, useState, useEffect } from 'react';
import { ApiContextProviderProps, ApiContextType } from './types';

export const ApiContext = createContext<ApiContextType>({
  news: [],
  currentPage: 1,
  setCurrentPage: (pageNumber: number) => {},
  isLoading: false,
});

export const ApiContextProvider = ({ children }: ApiContextProviderProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/everything?page=${currentPage}&pageSize=10&q=sport&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`,
      );
      if (!res.ok) {
        setIsLoading(false);
        throw new Error('Something went wrong');
      }
      const resJson = await res.json();
      const { articles } = resJson;
      setTimeout(() => {
        setNews((prevState) => prevState.concat(articles));
        setIsLoading(false);
      }, 1000);
    };
    fetchData();
  }, [currentPage]);

  const contextValues = {
    news,
    currentPage,
    setCurrentPage,
    isLoading,
  };

  return (
    <ApiContext.Provider value={contextValues}>{children}</ApiContext.Provider>
  );
};
