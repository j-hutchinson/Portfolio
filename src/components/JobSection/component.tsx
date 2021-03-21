import { Jobs } from '../constants';
import { CFGLogo, CheckoutLogo, MendeleyLogo } from '../Logos/component';
import {
    StyledCompanyName,
    StyledContainer,
    StyledDate,
    StyledDescription,
    StyledLogo,
    StyledTitle
} from './styles';

interface Props {
    desc: string;
    endDate?: string;
    startDate: string;
    name: string;
    title: string;
}

const JobSection = ({ name, startDate, endDate = "present", title, desc }: Props) => (
    <StyledContainer>
        <div>
            <StyledCompanyName>{name}</StyledCompanyName>
            <StyledDate>{startDate} {"->"} {endDate}</StyledDate>
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{desc}</StyledDescription>
        </div>
        <StyledLogo>
            {name === Jobs.Elsevier && <MendeleyLogo />}
            {name === Jobs.CFG && <CFGLogo />}
            {name === Jobs.Checkout && <CheckoutLogo />}
        </StyledLogo>
    </StyledContainer>
)

export default JobSection;