import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "../../css/GlobalStyle";
import { darkTheme, lightTheme } from "../../css/tokens";
import { Checkout, ColorScheme, Mendeley } from '../constants';
import ContactMe from '../ContactMe/component';
import Introduction from '../Introduction/component';
import JobSection from '../JobSection/component';
import ProjectSection from '../ProjectSection/component';
import Toggle from "../ThemeToggle/component";
import { useDarkMode } from "../ThemeToggle/useDarkMode";

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
        <>
          <Toggle toggleTheme={themeToggler} />
          <Introduction />
          <StyledBody >
            <JobSection {...Checkout} />
            <ProjectSection {...ColorScheme} />
            <JobSection {...Mendeley} />
            <ContactMe />
          </StyledBody>
        </>
      </>
    </ThemeProvider>
  )
};

export default App;
