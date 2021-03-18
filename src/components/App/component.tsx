import React from 'react';
import styled from 'styled-components';
import Experience from '../Experience/component';
import Introduction from '../Introduction/component'
import Socials from '../Socials/component';
import ContactMe from '../ContactMe/component';

const StyledContainer = styled.div`
  max-width: 1360px;
  margin: 64px auto;
`;

const App = (): JSX.Element => (
  <StyledContainer>
    <Introduction />
    <Socials />
    <Experience />
    <ContactMe />
  </StyledContainer >
);

export default App;
