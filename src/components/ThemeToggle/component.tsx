import styled from "styled-components"

const Button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.6rem;
    position: fixed;
    bottom: 24px;
    right: 32px;
    font-size: 32px;
    transition: all 0.5s ease-in-out;

    :hover {
        font-size: 40px;
    }
`;

export const Toggle = ({ toggleTheme }): JSX.Element => (
    <Button onClick={toggleTheme}>
        💡
    </Button>
);
