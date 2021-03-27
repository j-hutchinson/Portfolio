import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    main {
      background: ${({ theme }) => theme.background};
      transition: all 0.5s linear;
    }

    header {
      background: ${({ theme }) => theme.primaryBackground};
      transition: all 0.5s linear;
    }

    body {
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.fontColor};
      font-family: 'SF Pro Display', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      transition: all 0.5s linear;
      margin: 0;
    }

    section {
      background: ${({ theme }) => theme.sectionBackground}; 
      transition: all 0.5s linear;
    }

    a {
      color: ${({ theme }) => theme.highlight};
    }

    i {
      border: 2px solid ${({ theme }) => theme.highlight};
      transition: all 0.5s linear;
    }

    .logo {
      fill:  ${({ theme }) => theme.svgFill}; 
      transition: all 0.5s linear;
    }

    .company-link {
      color: ${({ theme }) => theme.fontColor};
    }
    
    .company-link:hover {
      color: ${({ theme }) => theme.highlight};
      transition: all 0.2s linear;
    }
`;
