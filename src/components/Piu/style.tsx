import styled from "styled-components";

export const piuContent = styled.li`
    border-bottom: 1px solid grey;
`;

export const PerfilTexto = styled.div`
    display: flex;
    align-items: center;
    margin: 24px 7px;
`;

export const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 6rem;
`;

export const ImgPerfilContainer = styled.figure`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const ImgPerfil = styled.img`
    width: 100%;
    height: auto;
    border-radius: 50%;
`;

export const NomeUsername = styled.p`
    overflow-wrap: break-word;
    width: 6rem;
`;

export const Texto = styled.p`
    font-size: 1.5rem;
    padding-left: 1rem;
    width: 70%;
`;

export const Interacao = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.5rem;
    .like {
        margin-right: 0.4rem;
    }
`;

export const imgInteracao = styled.div`
    max-width: 3rem;
    cursor: pointer;
`;

export const Figure = styled.figure`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 4rem;

    figcaption {
        font-size: 1.5rem;
    }
`;