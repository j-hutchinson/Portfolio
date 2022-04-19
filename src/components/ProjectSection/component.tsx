import { Description } from '../DescriptionText';
import colorScheme from './colorScheme.png';
import {
    StyledContainer,
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

export const ProjectSection: React.FC<Props> = ({ name, desc, link, theme }): JSX.Element => (
    <StyledContainer>
        <StyledLeft>
            <StyledLeft>
                <StyledTitle theme={theme}>
                    {name}
                </StyledTitle>
                <StyledTools>React · Typescript </StyledTools>
                <Description desc={desc} />
            </StyledLeft>
            <StyledLink href={link} target="_blank" rel="noopener noreferrer">Github</StyledLink>
        </StyledLeft>
        <StyledImg
            src={colorScheme}
            theme={theme}
            loading="lazy"
            alt="Screenshot from Color Scheme project" />
    </StyledContainer>
);
