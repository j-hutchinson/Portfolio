import {
    StyledTitle,
    StyledContainer,
    StyledDescription,
    StyledImg,
    StyledLink,
    StyledLeft,
    StyledTools
} from './styles';
import colorScheme from './colorScheme.png';

interface Props {
    desc: string;
    name: string;
    link: string;
    theme: Theme;
}

const ProjectSection = ({ name, desc, link, theme }: Props) => (
    <StyledContainer>
        <StyledLeft>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <StyledTitle theme={theme}>
                    <div>
                        {name}
                    </div>
                </StyledTitle>
                <StyledTools>React · Typescript </StyledTools>
                <StyledDescription>{desc}</StyledDescription>
            </div>
            <StyledLink href={link} target="_blank" rel="noopener noreferrer">Github</StyledLink>
        </StyledLeft>
        <StyledImg src={colorScheme} theme={theme} />
    </StyledContainer>
)

export default ProjectSection;