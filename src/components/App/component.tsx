import React from 'react';
import styled from 'styled-components';
import Experience from '../Experience/component';
import Introduction from '../Introduction/component'
import ContactMe from '../ContactMe/component';

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../css/GlobalStyle";
import { lightTheme, darkTheme } from "../../css/tokens";
import { useDarkMode } from "../ThemeToggle/useDarkMode";
import Toggle from "../ThemeToggle/component";

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
