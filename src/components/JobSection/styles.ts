import styled from 'styled-components'
import { colours } from '../../css/tokens'

export const StyledContainer = styled.section`
    border-radius: 20px;
    box-shadow: 20px 20px 60px rgb(0 0 0 / 50%), -20px -20px 60px rgb(255 255 255 / 5%);
    display: flex;
    justify-content: space-between;
    gap: 32px;
    padding: 64px 48px;
    max-width: 980px;
    margin: 80px auto;

    :first-child {
        margin-top: -60px;
    }

    @media screen and (max-width: 980px) {
        padding: 40px 20px;
        width: 560px;
    }

    @media screen and (max-width: 800px) {
         flex-direction: column-reverse;
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

export const StyledCompanyName = styled.h3`
    margin: 0px;
    font-size: 22px;
    display: inline;

    @media screen and (max-width: 600px) {
        font-size: 18px;
    }
`;

export const StyledTitle = styled.h4`
    margin: 8px 0px 16px;
    color: ${colours.jobTitle};
    font-size: 18px;
    font-style: normal;

    @media screen and (max-width: 600px) {
        font-size: 16px;
    }
`;

export const StyledDate = styled.p`
    display: block;
    color: #9C9C9C;
    font-size: 16px;
    font-weight: 600;
    margin: 8px 0px 0px;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 6.5em;

    @media screen and (max-width: 600px) {
        font-size: 14px;
        margin: 0px;
    }
`;

export const StyledDescription = styled.p`
    display: block;
    font-size: 16px;
    width: 90%;
    line-height: 22px;
    margin: 4px 0px 0px;
    
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
    text-decoration: none;
`;
