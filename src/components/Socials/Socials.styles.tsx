import styled from 'styled-components';
import { colours } from '../../css/tokens';

export const StyledList = styled.ul`
    display: flex;
    list-style: none;
    margin: 16px 0 0;
    padding: 0;
`;

export const StyledListItem = styled.li`
    border: none;    
    position: relative;
    padding: 16px;

    :first-child {
        padding-left: 0px;
    }
`;

export const StyledLink = styled.a`
    display: block;
    width: 33px;
    height: 33px;
    transition: all 0.5s ease-in-out;

    :hover {
        color: ${colours.hover};

        i {
            border: 2px solid ${colours.hover};
        }
    }
`;

export const StyledI = styled.i`
    font-size: 14px;
    text-align: center;
    display: inline-block;
    width: 33px;
    height: 33px;
    line-height: calc(33px - 4px);
    border-radius: 50%;
    position: absolute;
    line-height: 33px;
    transition: all 0.5s ease-in-out;
`;

export const StyledSpanLarge = styled.span`    
    top: 26px;
    right: 22px;
    position: absolute;
`;

export const StyledSpan = styled.span`
    top: 26px;
    right: 23px;
    position: absolute;
`;

export const StyledSpanGithub = styled.span`
    top: 26px;
    right: 22px;
    position: absolute;
`;
