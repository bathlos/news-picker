import { ReactNode } from 'react';

export type ApiContextProviderProps = {
  children: ReactNode;
};

export type ApiContextType = {
  news: object[];
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  isLoading: boolean;
};
