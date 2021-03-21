import React from 'react';
import styled from 'styled-components';
import Socials from '../Socials/component';
import space from './space.jpg';

const StyledWrapper = styled.header`
    width: 100%;
    margin: auto;
    height: 100vh;
    min-height: 690px;
    max-height: 1440px;

    @media screen and (max-width: 800px) {
        min-height: 400px;
    }
`;

const StyledText = styled.div`
    display: flex;
    gap: 48px;
    margin: auto;
    height: 100vh;
    min-height: 600px;
    max-height: 1440px;
    width: 855px;

    @media screen and (max-width: 900px){
        padding: 0 24px;
        width: 100%;
    }
`;

const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 900px) {
        width: 600px;
        margin: auto;
        justify-content: start;
    }
    @media screen and (max-width: 800px) {
        width: 500px;
        margin: auto;
        justify-content: start;
    }
    @media screen and (max-width: 600px) {
        width: 400px;
        margin: auto;
        justify-content: start;
    }
`;

const StyledHeading = styled.h1`
    font-size: 72px;
    margin: 32px auto;
    font-weight: bold;

    @media screen and (max-width: 900px){
        font-size: 56px;
        margin: 32px 0;
    }

    @media screen and (max-width: 600px){
        font-size: 48px;
        margin: 32px 0;
    }
`;

const StyledH2 = styled.h2`
    font-size: 18px;
    margin-bottom: 4px;
    letter-spacing: 1px;
    font-weight: 400;
    font-style: italic;
`;

const StyledPara = styled.p`
    font-size: 18px;
    margin: 0px 0px 20px 0px;
    line-height: 1.47059;
    letter-spacing: 0.25px;
    font-weight: 300;
    margin-bottom: 0;
`;

const StyledLink = styled.a`
    color: #3B70A2;
    font-style: italic;
    font-weight: 500;  
    text-decoration: none;
`;

const StyledImg = styled.img`
    border-radius: 20px;    
    height: 480px;
    margin: auto;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

const Introduction = (): JSX.Element => (
    <StyledWrapper>
        <StyledText>
            <StyledTextContainer>
                <StyledHeading>Jack Hutchinson</StyledHeading>
                <StyledH2>
                    Full stack engineer at{' '}
                    <StyledLink href="https://checkout.com" target="_blank" rel="noopener noreferrer">
                        Checkout.com
                </StyledLink>
                </StyledH2>
                <StyledPara>
                    Building reliable and scalable systems by day. Leveraging technology to launch fully featured products by night.
            </StyledPara>
                <Socials />
            </StyledTextContainer>
            <StyledImg src={space} />
        </StyledText>
    </StyledWrapper >
);

export default Introduction;