import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "../../css/GlobalStyle";
import { darkTheme, lightTheme } from "../../css/tokens";
import ContactMe from '../ContactMe/component';
import Introduction from '../Introduction/component';
import Experience from '../Experience/component';
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
            <Experience />
            <ContactMe />
          </StyledBody>
        </>
      </>
    </ThemeProvider>
  )
};

export default App;
