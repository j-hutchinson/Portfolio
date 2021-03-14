import React from 'react';
import styled from 'styled-components';
import AboutMe from '../AboutMe/component'
import Logo from '../Logo/component'

const StyledWrapper = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 5px rgb(0 0 0 / 15%);
  display: grid;
  grid-template-rows: 140px 1fr;
  max-width: 1360px;
  margin: 72px 128px;
  padding: 64px;
  
  @media (max-width: 1024px) {
    margin: 0 auto;
  }

`;


const App = (): JSX.Element => (
  <StyledWrapper>
    <Logo />
    <AboutMe />
  </StyledWrapper >
);

export default App;
