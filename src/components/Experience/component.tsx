import React from 'react';
import styled from 'styled-components';
import { CKODesc, ElsDesc } from '../../css/copy';
import { SectionStyles } from '../../css/tokens';
import JobProfile from '../JobProfile/component';

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
  border-bottom: 1px solid white;
  :last-child {
    border: none
  }
`;

const Experience = (): JSX.Element => (
  <StyledWrapper>
    <StyledHeading>Where have I been? 🙇‍♂️</StyledHeading>
    <StyledList>
      <StyledListItem>
        <JobProfile name="Checkout.com" startDate="04/01/21" title="Senior Software Engineer" desc={CKODesc} />
      </StyledListItem>
      <StyledListItem>
        <JobProfile name="Elsevier" startDate="04/09/17" title="Graduate Engineer -> Frontend Engineer" desc={ElsDesc} />
      </StyledListItem>
    </StyledList>
  </StyledWrapper >
);

export default Experience;
