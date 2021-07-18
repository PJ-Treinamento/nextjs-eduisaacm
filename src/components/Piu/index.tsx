import React, { useCallback, useEffect } from "react";

import Like from "../../assets/images/like.svg"
import SemLike from "../../assets/images/passion.svg"
import SemFavorito from "../../assets/images/estrela.svg"
import Lixeira from "../../assets/images/lixeira.svg"

import * as I from "../../models/index";
import * as S from "./style";

import Image from 'next/image';

import { useState } from "react";
import {api} from '../../services/api';
import { NextPage } from "next";


interface PiuProps {
    piu: I.Piu,
    user: I.User,
}

const Piu: NextPage<PiuProps> = ({ piu, user}) => {

    const [numeroLikes, setNumeroLikes] = useState(piu.likes.length);

    const [like, setLike] = useState(
        piu.likes.some(
            piuLike => user.likes.some((userPiuLike: { id: string; }) => userPiuLike.id === piuLike.id)
        )
    );

    const darLike = async () => {
        setLike(!like);
        !like ? setNumeroLikes(likes => likes + 1) : setNumeroLikes(likes => likes - 1)
        await api.post('/pius/like', { piu_id: piu.id})
    }

    const deletar = useCallback( () => {    
        const deletePiu = async () => {
            await api.delete('/pius', { data: {piu_id: piu.id }})
            window.location.reload();
        }
        return deletePiu()
    }, [])


    return(
        <S.piuContent>
            <S.PerfilTexto>
                <S.Perfil>
                    <S.ImgPerfilContainer>
                        <S.ImgPerfil src={piu.user.photo} alt={piu.user.first_name} />
                    </S.ImgPerfilContainer>
                    <S.NomeUsername>{piu.user.first_name}</S.NomeUsername>
                    <S.NomeUsername>{piu.user.username}</S.NomeUsername>
                </S.Perfil>
                <S.Texto>{piu.text}</S.Texto>
            </S.PerfilTexto>    
            <S.Interacao>
                <S.Figure>
                    <S.imgInteracao><Image onClick={darLike} className="like" src={like ? Like : SemLike} alt="Curtida" /></S.imgInteracao>
                    <figcaption>{numeroLikes}</figcaption>
                </S.Figure>
                <S.imgInteracao>
                    <Image src={SemFavorito} alt="Estrela" />
                </S.imgInteracao>
                { (user.id === piu.user.id) && (<S.imgInteracao><Image onClick={deletar} src={Lixeira} alt="Lixeira" /></S.imgInteracao>)}
            </S.Interacao>
        </S.piuContent>
    )
}

export default Piu;


