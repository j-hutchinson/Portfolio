import styled from 'styled-components'

const StyledDescription = styled.p`
    display: block;
    font-size: 14px;
    margin: 8px 0px 20px 0px;
    line-height: 1.47059;
    font-weight: 300;
    margin-bottom: 0;
`;

export const Description = ({ desc }) => (
    <StyledDescription>{desc}</StyledDescription>
);