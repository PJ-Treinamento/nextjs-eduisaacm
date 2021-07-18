import styled from "styled-components";

import { theme } from "../../styles/default.theme";

export const PopupContainer = styled.div`
    font-family: ${theme.fonts.secondary};
    background-color: #00000030;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
        background-color: white;
        width: 30rem;
        height: 25.5rem; 
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Fechar = styled.button`
    background-color: transparent;
    outline: none;
    width: 32px;
    height: 32px;
    right: calc(-50% + 32px);
    top: 16px;
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: center;
    &:before,
    &:after {
        content:' ';
        position: absolute;
        width: 2.5px;
        height: 24px;
        left: 14px;
        background-color: black;
        border-radius: 1px;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg)
    }
`;

export const Form = styled.form `
    margin: 20px 0;
    width: 22rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const Botao = styled.button `
    width: 9.4rem;
    height: 3.4rem;
    border-radius: 0.4rem;
    box-shadow: 2px 3px 6px #00000029;
    cursor: pointer;
    margin-top: 15px;
    font-size: 1rem;
    font-family: 'Nunito',sans-serif;
    background-color: #2D6A4F;
    color: white;
`;

export const Erro = styled.p`
    color: red;
    font-size: 12px;
`;

export const Titulo = styled.p`
    font-size: 1.6rem;
`;

export const InputStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    + .input-block {
        margin-top: 1.4rem;
    }
    label {
        font-size: 1rem;
    }
    input {
        width: 100%;
        height: 2.8rem;
        margin-top: 0.8rem;
        border-radius: 0.5rem;
        background: #EDEFF2;
        outline: 0;
        padding: 0 0.6rem;
    }
    :focus-within::after {
        width: (100% - 3.2rem);
        height: 2px;
        content: "";
        background: #2D6A4F;
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 0;
    }
`;