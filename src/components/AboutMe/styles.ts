import styled from 'styled-components'

export const StyledWrapper = styled.div`
    display: grid;    
    grid-template-columns: 0.3fr 0.7fr;
    gap: 48px;
    min-height: 400px;
    
    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledBio = styled.div`
    letter-spacing: 0.25px;
    line-height: 24px;
    font-size: 18px;
`;

export const StyledLinks = styled.div`
    padding-top: 24px;
`;

export const StyledLink = styled.a`
    display: inline;
    margin: 16px 16px 16px 0;
    color: #3B70A2;
    text-decoration: none;
    font-style: italic;

    :hover {
        text-decoration: underline;
    }
`;