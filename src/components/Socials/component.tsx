import React from 'react';
import styled from 'styled-components';
import { colours } from '../../css/tokens'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    position: absolute;
    top: 50%;
    right: 2%
    transform: translate3d(0, -50%, 0);

    @media screen and (max-width: 800px) {
        display: flex;
        gap: 16px;
        top: 6%;
    }
`;

const StyledListItem = styled.li`
    position: relative;
    padding: .9rem 0;
`;

const StyledLink = styled.a`
    display: block;
    width: 33px;
    height: 33px;
    color: white;
    transition: all 0.5s ease-in-out;

    :hover {
        color: ${colours.yellow};
    }
`;

const StyledI = styled.i`
    font-size: 14px;
    right: 0;
    text-align: center;
    display: inline-block;
    width: 33px;
    height: 33px;
    line-height: calc(33px - 4px);
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    position: absolute;
    top: 0;
    line-height: 33px;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
`;

const StyledSpanLarge = styled.span`
    top: 10px;
    position: absolute;
    right: 10px;
`;

const StyledSpan = styled.span`
    position: absolute;
    top: 10px;
    right: 12px;
    transition: all 0.5s ease-in-out;
`;

const StyledSpanGithub = styled.span`
    top: 9px;
    position: absolute;
    right: 11px;
`;

const Socials = () => (
    <StyledList >
        <StyledListItem>
            <StyledLink href="https://github.com.j-hutchinson" target="_blank" rel="noopener noreferrer">
                <StyledI aria-hidden="true"></StyledI>
                <StyledSpanGithub><FontAwesomeIcon icon={faGithub} /></StyledSpanGithub>
            </StyledLink>
        </StyledListItem>
        <StyledListItem>
            <StyledLink href="https://twitter.com/jack_hutchy" target="_blank" rel="noopener noreferrer">
                <StyledI aria-hidden="true"></StyledI>
                <StyledSpanLarge><FontAwesomeIcon icon={faTwitter} /></StyledSpanLarge>
            </StyledLink>
        </StyledListItem>
        <StyledListItem>
            <StyledLink href="https://instagram.com/jack_hutchy" target="_blank" rel="noopener noreferrer">
                <StyledI aria-hidden="true"></StyledI>
                <StyledSpan><FontAwesomeIcon icon={faInstagram} /></StyledSpan>
            </StyledLink>
        </StyledListItem>
        <StyledListItem>
            <StyledLink href="https://linkedin.com/jack-hutchinson-dev" target="_blank" rel="noopener noreferrer">
                <StyledI aria-hidden="true"></StyledI>
                <StyledSpan><FontAwesomeIcon icon={faLinkedin} /></StyledSpan>
            </StyledLink>
        </StyledListItem>
    </StyledList>
)

export default Socials;