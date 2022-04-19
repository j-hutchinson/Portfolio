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
        width: 560px;
    }
   
    @media screen and (max-width: 600px) {
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
    font-size: ${tokens.titleFontSize};
    display: inline;

    @media screen and (max-width: 600px) {
        font-size: 18px;
    }
`;

export const StyledDescription = styled.p`
    display: block;
    font-size: 14px;
    margin: 8px 0px 20px 0px;
    line-height: 1.47059;
    font-weight: 300;
    margin-bottom: 0;
`;

export const StyledLink = styled.a`
    color: #EEE;
    background: #363636;
    border-radius: 24px;
    box-shadow: -4px -4px 10px rgb(255 255 255 / 8%), 4px 4px 10px rgb(0 0 0 / 50%);
    display: flex;
    justify-content: center;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1.2px;
    line-height: 40px;
    margin: 24px 24px 0 0;
    padding: 4px 32px;
    text-decoration: none;
    width: 90px;

    :hover {
        text-decoration: none;
    }

    @media screen and (max-width: 900px) {
        margin: 24px 0px 0px;
    }
`;

export const StyledLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
