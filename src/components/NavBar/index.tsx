import React from "react";

import ImgPadrao from "../../assets/images/perfil.svg";

import * as S from "./style";

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = ({}) => {
    return(
        <S.NavBarContainer>
            <S.Botoes className="botoes">
                <S.Botao>Amigos</S.Botao>
                <S.Botao>Mensagens</S.Botao>
                <S.Botao>Configurações</S.Botao>
                <S.Botao>Meu Perfil</S.Botao>
            </S.Botoes>
        </S.NavBarContainer>
    );
}

export default NavBar;