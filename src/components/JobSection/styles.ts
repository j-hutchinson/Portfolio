import styled from 'styled-components'
import { tokens } from '../../css/tokens';

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

    @media screen and (max-width: 1100px) {
        padding: 40px 20px;
        width: 760px;
    }

    @media screen and (max-width: 900px) {
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
    font-size: ${tokens.titleFontSize};
    display: inline;

    @media screen and (max-width: 600px) {
        font-size: 18px;
    }
`;

export const StyledTitle = styled.h4`
    color: ${({ theme }) => theme.secondaryFontColor};
    margin: 8px 0px 16px;
    font-weight: 300;
    font-size: 18px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
        font-size: 16px;
        flex-direction: column;
        gap: 4px;
    }
`;

export const StyledDate = styled.span`
    display: block;
    font-weight: 300;
    margin: 0px;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;

    @media screen and (max-width: 600px) {
        font-size: 14px;
        margin: 0px;
    }
`;

export const StyledDescription = styled.p`
    display: block;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.47059;
    margin: 4px 0px 0px;
`;

export const StyledLeft = styled.div`
    width: 700px;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    width: 200px;

    @media screen and (max-width: 800px) {
        margin: auto auto 16px;
    }
`;

export const StyledLink = styled.a`
    text-decoration: none;
`;
