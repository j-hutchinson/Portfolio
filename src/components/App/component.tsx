import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "../../css/GlobalStyle";
import { darkTheme, lightTheme } from "../../css/tokens";
import { Checkout, ColorScheme, Mendeley, CodeFirstGirls } from '../constants';
import { ContactMe } from '../ContactMe';
import { Introduction } from '../Introduction';
import { JobSection } from '../JobSection';
import { ProjectSection } from '../ProjectSection';
import { Toggle, useDarkMode } from "../ThemeToggle";

const StyledBody = styled.main`
  padding-bottom: 64px;
`;

const App = (): JSX.Element => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle toggleTheme={themeToggler} />
        <Introduction />
        <StyledBody >
          <JobSection {...Checkout} theme={themeMode} />
          <JobSection {...Mendeley} theme={themeMode} />
          <JobSection {...CodeFirstGirls} theme={themeMode} />
          <ProjectSection {...ColorScheme} theme={themeMode} />
          <ContactMe theme={themeMode} />
        </StyledBody>
      </>
    </ThemeProvider >
  )
};

export default App;
