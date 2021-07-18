import styled from "styled-components";

export const HeaderStyle = styled.header `
    background-color: #c4c4c4;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    position: fixed;
    width: 100vw;
`;

export const Logo = styled.div`
    max-width: 64px;
    margin: 5px 5.5%;
    cursor: pointer;   
`

export const LinksContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    .black {
        color: black;
    }
    .white {
        color: white;
    }
`;

export const Links = styled.button`
    background-color: transparent;
    margin-left: 48px;
    margin-right: 32px;
    font-size: 1.5rem;
    cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
`;