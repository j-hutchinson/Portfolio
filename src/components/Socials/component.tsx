import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import styled from 'styled-components';
import { colours } from '../../css/tokens';

const StyledList = styled.ul`
    display: flex;
    list-style: none;
    margin: 24px 0 0;
    padding: 0;

    @media screen and (max-width: 800px) {
        justify-content: center;
    }
`;

const StyledListItem = styled.li`
    border: none;    
    position: relative;
    padding: 16px;

    :first-child {
        padding-left: 0px;
        margin-left: -12px;
    }
`;

const StyledLink = styled.a`
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

const StyledI = styled.i`
    font-size: 14px;
    right: 0;
    text-align: center;
    display: inline-block;
    width: 33px;
    height: 33px;
    line-height: calc(33px - 4px);
    border-radius: 50%;
    position: absolute;
    top: 0;
    line-height: 33px;
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
`;

const StyledSpanGithub = styled.span`
    top: 9px;
    position: absolute;
    right: 11px;
`;

const Socials = (theme) => (
    <StyledList >
        <StyledListItem>
            <StyledLink href="https://github.com.j-hutchinson" target="_blank" rel="noopener noreferrer" aria-label="Jack's Github">
                <StyledI aria-hidden="true" theme={theme}></StyledI>
                <StyledSpanGithub theme={theme}>
                    <FontAwesomeIcon icon={faGithub} />
                </StyledSpanGithub>
            </StyledLink>
        </StyledListItem>
        <StyledListItem>
            <StyledLink href="https://twitter.com/jack_hutchy" target="_blank" rel="noopener noreferrer" aria-label="Jack's Twitter">
                <StyledI aria-hidden="true" theme={theme} ></StyledI>
                <StyledSpanLarge theme={theme}>
                    <FontAwesomeIcon icon={faTwitter} />
                </StyledSpanLarge>
            </StyledLink>
        </StyledListItem>
        <StyledListItem>
            <StyledLink href="https://instagram.com/jack_hutchy" target="_blank" rel="noopener noreferrer" aria-label="Jack's Instagram">
                <StyledI aria-hidden="true" theme={theme}></StyledI>
                <StyledSpan theme={theme}>
                    <FontAwesomeIcon icon={faInstagram} />
                </StyledSpan>
            </StyledLink>
        </StyledListItem>
        <StyledListItem>
            <StyledLink href="https://linkedin.com/jack-hutchinson-dev" target="_blank" rel="noopener noreferrer" aria-label="Jack's LinkedIn">
                <StyledI aria-hidden="true" theme={theme}></StyledI>
                <StyledSpan theme={theme}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </StyledSpan>
            </StyledLink>
        </StyledListItem>
    </StyledList>
)


export default Socials;