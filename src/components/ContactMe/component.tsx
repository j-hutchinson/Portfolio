import {
  StyledContainer,
  StyledDescription,
  StyledLeft,
  StyledLink,
  StyledTitle
} from './styles';

interface Props {
  theme: Theme;
}

export const ContactMe: React.FC<Props> = ({ theme }): JSX.Element => (
  <StyledContainer>
    <StyledLeft>
      <StyledTitle theme={theme}>
        <div>
          Contact Me
        </div>
      </StyledTitle>
      <StyledDescription>Want to see more of my work or get in touch. Get in contact through my socials ✌️</StyledDescription>
      <div style={{ display: 'flex', gap: "16px" }}>
        <StyledLink href="https://github.com/j-hutchinson" target="_blank" rel="noopener noreferrer">More work</StyledLink>
        <StyledLink href="mailto:jackhutchy@hotmail.com?subject=Hey, I saw your site" target="_blank" rel="noopener noreferrer">Contact</StyledLink>
      </div>
    </StyledLeft>
  </StyledContainer>
);
