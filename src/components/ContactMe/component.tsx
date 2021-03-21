import styled from 'styled-components';
import { SectionStyles } from '../../css/tokens';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBeer, faChartLine, faLaptopCode } from "@fortawesome/free-solid-svg-icons"

const StyledWrapper = styled.section`
  ${SectionStyles};
`;

const StyledHeading = styled.h2`
  text-align: center;
  font-size: 32px;

  @media screen and (max-width: 600px) {
    font-size: 22px;
}
`;

const StyledText = styled.p`
  font-size: 22px;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const StyledGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    margin: 24px 0;
  }
`;

const StyledGroupItem = styled.span`
  margin-right: 32px;

  :last-child {
    margin-right: 0px;
  }
`;

const ContactMe = (): JSX.Element => (
  <StyledWrapper >
    <StyledHeading>Get in touch!</StyledHeading>
    <StyledText>
      Feel free to reach out to me via any of my social medias. I want to chat to like minded people about tech, crypto or whatever you can think of.
    </StyledText>
    <StyledGroup>
      <StyledGroupItem>
        <FontAwesomeIcon icon={faLaptopCode} size="3x" />
      </StyledGroupItem>
      <StyledGroupItem>
        <FontAwesomeIcon icon={faChartLine} size="3x" />
      </StyledGroupItem>
      <StyledGroupItem>
        <FontAwesomeIcon icon={faBeer} size="3x" />
      </StyledGroupItem>
    </StyledGroup>

  </StyledWrapper >
);

export default ContactMe;
