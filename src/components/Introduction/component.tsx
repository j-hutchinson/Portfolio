import React from 'react';
import styled from 'styled-components';
import space from './space.jpg'
import { SectionStyles } from '../../css/tokens';

const StyledWrapper = styled.section`
    ${SectionStyles};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px
`;

const StyledText = styled.div`
    margin: auto;
`;

const StyledHeading = styled.h1`
    font-size: 80px;
    line-height: 64px;
    color: white;
    margin-bottom: 16px;
    margin-top: 0px;
`;

const StyledPara = styled.p`
    font-size: 24px;
    line-height: 36px;
    color: white;
    margin: 0px;
`;

const StyledImg = styled.img`
    margin: auto;
`;

const StyledLink = styled.a`
    color: white;
    font-style: italic;
    font-weight: 500;  
    text-decoration: none;

    :hover {
        color: linear-gradient(to right, white 34%, blue 65%);
        transition: all 0.5s;
    }
`;

const Introduction = (): JSX.Element => (
    <StyledWrapper>
        <StyledText>
            <StyledHeading>Hi, I'm Jack 👋</StyledHeading>
            <StyledPara>I'm a full stack web developer at{' '}
                <StyledLink href="https://checkout.com" target="_blank" rel="noopener noreferrer">
                    Checkout.com
                </StyledLink>
            </StyledPara>
        </StyledText>
        <StyledImg src={space} width="380px" />
    </StyledWrapper >
);

export default Introduction;
