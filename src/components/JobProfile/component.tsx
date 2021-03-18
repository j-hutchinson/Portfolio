import React from 'react';
import {
    StyledContainer,
    StyledCompanyName,
    StyledTitle,
    StyledTop,
    StyledDate,
    StyledDescription
} from './styles';

interface Props {
    desc: string;
    endDate?: string;
    startDate: string;
    name: string;
    title: string;
}

const JobProfile = ({ name, startDate, endDate = "present", title, desc }: Props) => (
    <StyledContainer>
        <StyledTop>
            <StyledCompanyName>{name}</StyledCompanyName>
            <StyledDate>{startDate} {"->"} {endDate}</StyledDate>
        </StyledTop>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{desc}</StyledDescription>
    </StyledContainer>
)

export default JobProfile;