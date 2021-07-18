import React from "react";

import Image from 'next/image';

import * as S from "./style";

import Logo from "../../assets/images/logo.svg";
import { useAuth } from "hooks/auth";



const Header = () => {

    const { logout } = useAuth();

    return (
        <S.HeaderStyle>
            <S.Logo>
                <Image
                    className="logo" 
                    src={ Logo } 
                    alt="Piupiwer"
                    width={50}
                    height={70}
                />
            </S.Logo>
            <S.LinksContainer>
                <S.Links className="black">Meu perfil</S.Links>
                <S.Links onClick={logout} className="white">Sair</S.Links>
            </S.LinksContainer>
        </S.HeaderStyle>
    )
}

export default Header;