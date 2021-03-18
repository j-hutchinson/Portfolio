import React from 'react';
import styled from 'styled-components';
import { SectionStyles } from '../../css/tokens';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBeer, faChartLine, faLaptopCode } from "@fortawesome/free-solid-svg-icons"

const StyledWrapper = styled.section`
    ${SectionStyles};
`;

const StyledHeading = styled.h2`
  text-align: center;
  font-size: 40px;

  @media screen and (max-width: 600px) {
    font-size: 32px;
}
`;

const StyledText = styled.p`
  font-size: 32px;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const StyledGroup = styled.div`
  display: flex;
  gap: 48px;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    margin: 156px 0;
  }
`;

const ContactMe = (): JSX.Element => (
  <StyledWrapper>
    <StyledHeading>Get in touch!</StyledHeading>
    <StyledText>
      Feel free to reach out to me via any of my social medias. I want to chat to like minded people about tech, crypto or whatever you can think of.
    </StyledText>
    <StyledGroup>
      <FontAwesomeIcon icon={faLaptopCode} size="5x" />
      <FontAwesomeIcon icon={faChartLine} size="5x" />
      <FontAwesomeIcon icon={faBeer} size="5x" />
    </StyledGroup>

  </StyledWrapper >
);

export default ContactMe;
