
import { Description } from '../DescriptionText';
import {
    StyledCompanyName,
    StyledContainer,
    StyledLink,
    StyledLogo,
    StyledLeft,
    StyledTitle
} from './styles';

interface Props {
    desc: string;
    endDate?: string;
    startDate?: string;
    name: string;
    title: string;
    link: string;
    logo: JSX.Element;
    theme: Theme;
}

export const JobSection: React.FC<Props> = ({ name, title, desc, link, theme, logo }): JSX.Element => (
    <StyledContainer>
        <StyledLeft>
            <StyledCompanyName>
                <StyledLink href={link} target="_blank" rel="noopener noreferrer" className="company-link">
                    {name}
                </StyledLink>
            </StyledCompanyName>
            <StyledTitle theme={theme}>
                <span>
                    {title}
                </span>
            </StyledTitle>
            <Description desc={desc} />
        </StyledLeft>
        <StyledLogo>
            {logo}
        </StyledLogo>
    </StyledContainer>
);
