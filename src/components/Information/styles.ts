import styled from 'styled-components'

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

export const StyledBox1 = styled.div`
    background: radial-gradient(118.99% 670.46% at -7.06% -9.5%,#FFFFFF 0%,#F1F1F1 100%);
    box-shadow: 0px 0px 10px 5px rgb(0 0 0 / 10%);
    border-radius: 8px;
`;

export const StyledBox2 = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 24px;
`;

export const StyledInner = styled.div`
    background: radial-gradient(118.99% 670.46% at -7.06% -9.5%,#FFFFFF 0%,#F1F1F1 100%);
    border-radius: 8px;
    box-shadow: 0px 0px 10px 5px rgb(0 0 0 / 10%);
    font-style: italic;
    font-weight: 500;
    padding: 24px;
`;

export const StyledList = styled.ul`
    display: flex;
    gap: 24px;
    font-style: normal;
    list-style: none;
    padding: 0;
`;

export const StyledJobList = styled.ul`
    display: block;
    list-style: none;
    padding: 0;
`;

export const StyledListItem = styled.li`
    font-style: normal;
    :before {
        content: "👉";
        margin-right: 8px;
    }
`;

export const StyledJobItem = styled.li`
    width: 100%;
    display: block;    
    
    :first-child {
        border-bottom: 1px solid #E6E7EC;
    }    
`;