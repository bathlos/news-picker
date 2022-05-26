import {
  StyledHeader,
  HeaderNameLink,
  HeaderNamePlayz,
  HeaderName,
} from './Header.css';

export const Header = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <StyledHeader>
      <HeaderNameLink to="/" onClick={handleScrollToTop}>
        <HeaderName>
          News<HeaderNamePlayz>Picker</HeaderNamePlayz>
        </HeaderName>
      </HeaderNameLink>
    </StyledHeader>
  );
};
