import React from 'react';
import styled from 'styled-components';
import Experience from '../Experience/component';
import Introduction from '../Introduction/component'
import ContactMe from '../ContactMe/component';

const StyledBody = styled.div`
  margin-top: -160px;
`;

const App = (): JSX.Element => (
  <>
    <Introduction />
    <StyledBody>
      <Experience />
      <ContactMe />
    </StyledBody>
  </ >
);

export default App;
