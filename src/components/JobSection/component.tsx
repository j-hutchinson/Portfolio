import React from 'react';
import { CFGLogo, MendeleyLogo, CheckoutLogo } from '../Logos/component';
import {
    StyledContainer,
    StyledCompanyName,
    StyledTitle,
    StyledDate,
    StyledDescription,
    StyledLogo
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
            {name === 'Elsevier' && <MendeleyLogo />}
            {name === 'Code First Girls' && <CFGLogo />}
            {name === 'Checkout.com' && <CheckoutLogo />}
        </StyledLogo>
    </StyledContainer>
)

export default JobSection;