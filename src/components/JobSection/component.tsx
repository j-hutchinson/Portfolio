import { Jobs } from '../constants';
import { CFGLogo, CheckoutLogo, MendeleyLogo } from '../Logos/component';
import {
    StyledCompanyName,
    StyledContainer,
    StyledDate,
    StyledDescription,
    StyledLink,
    StyledLogo,
    StyledLeft,
    StyledTitle
} from './styles';

interface Props {
    desc: string;
    endDate?: string;
    startDate: string;
    name: string;
    title: string;
    link: string;
}

const JobSection = ({ name, startDate, endDate = "present", title, desc, link }: Props) => (
    <StyledContainer>
        <StyledLeft>
            <StyledCompanyName>
                <StyledLink href={link} target="_blank" rel="noopener noreferrer" className="company-link">
                    {name}
                </StyledLink>
            </StyledCompanyName>
            <StyledTitle>
                <span>
                    {title}
                </span>
                <StyledDate>
                    {startDate} {"->"} {endDate}
                </StyledDate>
            </StyledTitle>
            <StyledDescription>{desc}</StyledDescription>
        </StyledLeft>
        <StyledLogo>
            {name === Jobs.Mendeley && <MendeleyLogo />}
            {name === Jobs.CFG && <CFGLogo />}
            {name === Jobs.Checkout && <CheckoutLogo />}
        </StyledLogo>
    </StyledContainer>
)

export default JobSection;