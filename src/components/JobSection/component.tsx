import { Jobs } from '../constants';
import { CFGLogo, CheckoutLogo, MendeleyLogo } from '../Logos/component';
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
    theme: Theme;
}

export const JobSection: React.FC<Props> = ({ name, title, desc, link, theme }): JSX.Element => (
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
            {name === Jobs.Mendeley && <MendeleyLogo />}
            {name === Jobs.CFG && <CFGLogo />}
            {name === Jobs.Checkout && <CheckoutLogo />}
        </StyledLogo>
    </StyledContainer>
);
