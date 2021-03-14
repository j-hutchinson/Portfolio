import React from 'react';
import {
    StyledCompanyName,
    StyledTitle,
    StyledTop,
    StyledDate
} from './styles';

const JobProfile = ({ name, startDate, endDate = "present", title }) => (
    <div>
        <StyledTop>
            <StyledCompanyName>{name}</StyledCompanyName>
            <StyledDate>{startDate} {"->"} {endDate}</StyledDate>
        </StyledTop>
        <StyledTitle>{title}</StyledTitle>
    </div>
)

export default JobProfile;