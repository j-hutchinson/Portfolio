import styled from 'styled-components';
import { colours } from '../../css/tokens';

export const StyledWrapper = styled.header`
    width: 100%;
    margin: auto;
    height: 100vh;
    min-height: 690px;
    max-height: 1440px;

    @media screen and (max-width: 800px) {
        min-height: 400px;
    }
`;

export const StyledText = styled.div`
    display: flex;
    gap: 48px;
    margin: auto;
    height: 100vh;
    min-height: 600px;
    max-height: 1440px;
    width: 855px;

    @media screen and (max-width: 900px){
        width: 100%;
    }
`;

export const StyledTextContainer = styled.div`
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
        width: 470px;
        margin: auto 24px;
        justify-content: start;
    }
`;

export const StyledHeading = styled.h1`
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
        width: 80%;
    }
`;

export const StyledH2 = styled.h2`
    font-size: 18px;
    margin-bottom: 4px;
    letter-spacing: 1px;
    font-weight: 400;
    font-style: italic;
`;

export const StyledPara = styled.p`
    font-size: 18px;
    margin: 0px 0px 20px 0px;
    line-height: 1.47059;
    letter-spacing: 0.25px;
    font-weight: 200;
    margin-bottom: 0;
`;

export const StyledLink = styled.a`
    font-style: italic;
    font-weight: 500;  
    text-decoration: none;

    :hover {
        color: ${colours.hover};
        transition: all 0.5s linear; 
    }
`;

export const StyledImg = styled.img`
    border-radius: 20px;    
    box-shadow: 20px 20px 60px rgb(0 0 0 / 20%), -20px -20px 60px rgb(255 255 255 / 5%);
    height: 480px;
    margin: auto;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;
