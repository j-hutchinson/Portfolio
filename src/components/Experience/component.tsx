import React from 'react';
import styled from 'styled-components';
import { CKODesc, ElsDesc, CFGDesc } from '../../css/copy';
import { SectionStyles } from '../../css/tokens';
import JobProfile from '../JobProfile/component';

const StyledContainer = styled.div`
  margin-top: -150px;

  @media screen and (max-width: 800px) {
    margin-top: 0px;
  }
`;

const StyledWrapper = styled.section`
  ${SectionStyles};
`;

const StyledHeading = styled.h2`
  font-size: 36px;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  :last-child {
    border: none
  }
`;

const Experience = (): JSX.Element => (
  <StyledContainer>
    <StyledWrapper >
      <StyledHeading>Where have I been? 🙇‍♂️</StyledHeading>
      <StyledList>
        <StyledListItem>
          <JobProfile name="Checkout.com" startDate="04/01/21" title="Senior Software Engineer" desc={CKODesc} />
        </StyledListItem>
        <StyledListItem>
          <JobProfile name="Code First Girls" startDate="01/20" endDate="04/20" title="Instructor" desc={CFGDesc} />
        </StyledListItem>
        <StyledListItem>
          <JobProfile name="Elsevier" startDate="04/09/17" title="Graduate Engineer -> Frontend Engineer" desc={ElsDesc} />
        </StyledListItem>
      </StyledList>
    </StyledWrapper >
  </StyledContainer>
);

export default Experience;
