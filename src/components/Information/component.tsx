import React from 'react';
import Bio from '../Bio/component';
import JobProfile from '../JobProfile/component';
import {
    StyledContainer,
    StyledBox1,
    StyledBox2,
    StyledInner,
    StyledList,
    StyledJobList,
    StyledListItem,
    StyledJobItem
} from './styles';

const Information = () => (
    <StyledContainer>
        <StyledBox1>
            <Bio />
        </StyledBox1>
        <StyledBox2>
            <StyledInner>
                History
                <StyledJobList>
                    <StyledJobItem>
                        <JobProfile name="Checkout.com" title="Senior Frontend engineer" startDate="04/01/21" />
                    </StyledJobItem>
                    <StyledJobItem>
                        <JobProfile name="Elsevier" title="Graduate Engineer -> Frontend engineer" startDate="04/09/17" endDate="01/11/20" />
                    </StyledJobItem>
                </StyledJobList>
            </StyledInner>
            <StyledInner>
                Familiar technologies
                <StyledList>
                    <span>
                        <StyledListItem>ReactJS</StyledListItem>
                        <StyledListItem>TypeScript</StyledListItem>
                        <StyledListItem>GraphQL</StyledListItem>
                        <StyledListItem>NodeJS</StyledListItem>
                        <StyledListItem>CSS</StyledListItem>
                    </span>
                    <span>
                        <StyledListItem>Agile</StyledListItem>
                        <StyledListItem>AWS</StyledListItem>
                        <StyledListItem>Kubernetes</StyledListItem>
                        <StyledListItem>Docker</StyledListItem>
                    </span>
                </StyledList>
            </StyledInner>
        </StyledBox2>
    </StyledContainer>
);

export default Information;