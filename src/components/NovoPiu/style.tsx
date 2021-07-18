  
import React from "react";

import styled from "styled-components";

export const NovoPiuContainer = styled.div`
    border-bottom: 2px solid black;
    padding: 17px;
    .erro {
        color: red;
    }
`;


export const ImgPerfilContainer = styled.figure`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    min-width: 60px;
`;

export const Post = styled.div`
    display: flex;
    form {
        width: 60%;
    }
    margin-bottom: 0.3rem;
`;

export const TextArea = styled.textarea`
    resize: vertical;
    margin: 10px;
    width: 100%;
    height: 84px;
    background-color: #c4c4c44a;
    border-radius: 0.2rem;
    padding: 3px;
`;

export const ImgPerfil = styled.img`
    width: 100%;
    height: auto;
    border-radius: 50%;
`;

export const Contador = styled.p`
    margin-left: 2%;
    font-size: 1.3rem;
`;

export const IconesBotao = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Icones = styled.div`
    display: flex;
    justify-content: space-between;
    width: 15%;
`;

export const Icone = styled.img`
    max-width: 20px;
`;

export const BotaoPostar = styled.button`
    width: 9.4rem;
    height: 2rem;
    border-radius: 0.4rem;
    box-shadow: 2px 3px 6px #00000029;
    font-size: 1rem;
    color: white;
    background-color: #2D6A4F;
    cursor: pointer;
        &:hover {
            background-color: #1d4734;
        }
`;