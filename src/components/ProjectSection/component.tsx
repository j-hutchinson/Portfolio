import colorScheme from './colorScheme.png';
import {
    StyledContainer,
    StyledDescription,
    StyledImg,
    StyledLeft,
    StyledLink,
    StyledTitle,
    StyledTools
} from './styles';

interface Props {
    desc: string;
    name: string;
    link?: string;
    theme: Theme;
}

const ProjectSection = ({ name, desc, link, theme }: Props) => (
    <StyledContainer>
        <StyledLeft>
            <StyledLeft>
                <StyledTitle theme={theme}>
                    <div>
                        {name}
                    </div>
                </StyledTitle>
                <StyledTools>React · Typescript </StyledTools>
                <StyledDescription>{desc}</StyledDescription>
            </StyledLeft>
            <StyledLink href={link} target="_blank" rel="noopener noreferrer">Github</StyledLink>
        </StyledLeft>
        <StyledImg src={colorScheme} theme={theme} />
    </StyledContainer>
)

export default ProjectSection;