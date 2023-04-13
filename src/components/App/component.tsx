import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "../../css/GlobalStyle";
import { darkTheme, lightTheme } from "../../css/tokens";
import { JobsList } from '../constants';
import { ContactMe } from '../ContactMe';
import { Introduction } from '../Introduction';
import { JobSection } from '../JobSection';
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
          {JobsList.map((job) => <JobSection {...job} theme={themeMode} />)}
          <ContactMe theme={themeMode} />
        </StyledBody>
      </>
    </ThemeProvider >
  )
};

export default App;
