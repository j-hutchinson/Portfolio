import React from 'react';
import {
    StyledWrapper,
    StyledBio,
    StyledLinks,
    StyledLink
} from './styles';
import Information from '../Information/component';

const SocialLinks = [
    {
        label: 'Twitter',
        url: "https://twitter.com/Jack_Hutchy"
    },
    {
        label: 'Github',
        url: "https://github.com/j-hutchinson"
    },
    {
        label: 'LinkedIn',
        url: "https://linkedin.com/jack-hutchinson-dev"
    },
];

const AboutMe = (): JSX.Element => (
    <StyledWrapper>
        <StyledBio>
            Hi, I'm a front end engineer at <StyledLink href="https://checkout.com" target="_blank" rel="noopener noreferrer">Checkout.com.</StyledLink>
            Building reliable and scalable systems by day. Leveraging technology to launch fully featured products by night.
            <StyledLinks>
                {SocialLinks.map(item => (
                    <StyledLink href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</StyledLink>
                ))}
            </StyledLinks>
        </StyledBio>
        <Information />
    </StyledWrapper >
);

export default AboutMe;
