import styled from 'styled-components'

export const StyledContainer = styled.section`
    border-radius: 20px;
    box-shadow: 20px 20px 60px rgb(0 0 0 / 20%), -20px -20px 60px rgb(255 255 255 / 5%);
    display: flex;
    justify-content: space-between;
    gap: 32px;
    padding: 64px 48px;
    width: 900px;
    margin: 80px auto;

    :first-child {
        margin-top: -60px;
    }

    @media screen and (max-width: 900px) {
        padding: 40px 20px;
        width: 560px;
    }
   
    @media screen and (max-width: 600px) {
        padding: 40px 20px;
        width: 335px;
    }

    @media screen and (max-width: 350px) {
        :first-child {
            margin-top: 0px;
        }
    }
`;

export const StyledTitle = styled.h3`
    margin: 0px;
    font-size: 36px;
    display: inline;

    @media screen and (max-width: 600px) {
        font-size: 18px;
    }
`;

export const StyledTools = styled.h4`
    color: ${({ theme }) => theme.secondaryFontColor};
    margin: 8px 0px 16px;
    font-weight: 300;
    font-size: 18px;

    @media screen and (max-width: 600px) {
        font-size: 16px;
    }
`;

export const StyledDescription = styled.p`
    display: block;
    font-size: 18px;
    margin: 0px 0px 20px 0px;
    line-height: 1.47059;
    font-weight: 300;
    margin-bottom: 0;
    
    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

export const StyledLogo = styled.div`
    display: flex;

    @media screen and (max-width: 800px) {
        margin: auto auto 16px;
    }
`;

export const StyledLink = styled.a`
    color: #EEE;
    background: #363636;
    border-radius: 24px;
    box-shadow: -4px -4px 10px rgb(255 255 255 / 8%), 4px 4px 10px rgb(0 0 0 / 50%);
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1.2px;
    line-height: 40px;
    margin-right: 20px;
    padding: 4px 32px;
    text-decoration: none;
    width: min-content;

    :hover {
        text-decoration: none;
    }

    @media screen and (max-width: 900px) {
        margin: 24px 0px 0px;
    }
`;

export const StyledImg = styled.img`
    border-radius: 20px;    
    box-shadow: -10px -10px 30px rgb(255 255 255 / 5%), 10px 10px 30px ${({ theme }) => theme.imgShadow};
    border-radius: 10px;
    overflow: hidden;
    height: 315px;
    width: 500px;
    transition: all 0.4s linear;

    @media screen and (max-width: 900px) {
        height: 170px;
        width: 300px;
        margin: auto;
    }
`;


export const StyledLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 320px;
`;
