import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    main {
      background: ${({ theme }) => theme.background}
      transition: all 0.50s linear;
    }

    header {
      background: ${({ theme }) => theme.primaryBackground};
      transition: all 0.50s linear;
    }

    body {
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.fontColor};
      font-family: 'SF Pro Display', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      transition: all 0.50s linear;
      margin: 0;
    }

    section {
      background: ${({ theme }) => theme.sectionBackground}; 
      transition: all 0.50s linear;
    }

    i {
      border: 2px solid ${({ theme }) => theme.border};
      transition: all 0.50s linear;
    }
`;
