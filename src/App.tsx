import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'theme/globalStyles';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from 'views/LandingPage/LandingPage';
import { NewsPage } from 'components/NewsPage/NewsPage';
import { theme } from 'theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/*" element={<LandingPage />}>
          <Route path=":newsId" element={<NewsPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
