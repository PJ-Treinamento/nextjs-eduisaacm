import React from 'react';
import { theme } from '../../styles/default.theme'

import styled from 'styled-components';

export const Main = styled.main`
    background-color: #D8F3DC;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    font-family: ${theme.fonts.secondary};
    height: 100%;
    justify-content: center;
`;

export const Conteudo = styled.ul`
    margin-top: 100px;
    background-color: white;
    margin-left: 14rem;
    width: 46%;
    border-radius: 22px;
`;

export const BarraDePesquisa = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
    padding: 1rem 0;
    input {
        height: 3rem;
        position: initial;
    }
`;

export const InputStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    + .input-block {
        margin-top: 1.4rem;
    }
    label {
        font-size: 1.5rem;
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

export const Nenhum = styled.p`
    font-family: ${theme.fonts.secondary};
    margin-left: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 1.5rem;
`
