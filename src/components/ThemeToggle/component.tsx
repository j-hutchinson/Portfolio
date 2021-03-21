import React from 'react'
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
`;

const Toggle = ({ toggleTheme }) => (
    <Button onClick={toggleTheme} >
        💡
    </Button>
);

export default Toggle;
