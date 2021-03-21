import styled from 'styled-components'
import { colours } from '../../css/tokens'

export const StyledContainer = styled.div`
    margin: 32px 0;
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

export const StyledTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-style: normal;

    @media screen and (max-width: 600px) {
        display: grid;
    }
`;

export const StyledDate = styled.p`
    display: inline;
    font-size: 18px;
    margin: 4px 0px 0px;
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
    width: 80%;
    line-height: 22px;
    margin: 4px 0px 0px;
    
    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
`;
