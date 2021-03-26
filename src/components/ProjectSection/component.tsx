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
}

const ProjectSection = ({ name, desc, link }: Props) => (
    <StyledContainer>
        <StyledLeft>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <StyledTitle>
                    <div>
                        {name}
                    </div>
                </StyledTitle>
                <StyledTools>React · Typescript </StyledTools>
                <StyledDescription>{desc}</StyledDescription>
            </div>
            <StyledLink href={link} target="_blank" rel="noopener noreferrer">Github</StyledLink>
        </StyledLeft>
        <StyledImg src={colorScheme} />
    </StyledContainer>
)

export default ProjectSection;