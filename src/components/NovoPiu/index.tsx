import React, { useState } from "react";

import { useEffect } from "react";

import {api} from '../../services/api';

import { parseCookies } from "nookies";

import * as I from "../../models/index";
import * as S from "./style";



interface PostarPiuProps {
    user: I.User
}

const PostarPiu: React.FC<PostarPiuProps> = ({user}) => {

    const { 'next-piupiwer:token': token } = parseCookies();

    const [mensagemErro, setMensagemErro] = useState(false);

    const [contador, setContador] = useState(0);
3
    const [corDeErro, setCorDeErro] = useState("");

    const [piuTexto, setPiuTexto] = useState("")

    useEffect(()=>{

        console.log(piuTexto)
        if (contador > 140) {
            setCorDeErro("erro")
        }
                
        if (contador > 0 && contador < 140) {
            setCorDeErro("")
            setMensagemErro(false)
        }

    },[contador])


    const postarPiu = async () => {
        if (piuTexto.trim().length == 0 || piuTexto.trim().length > 140) {
            setMensagemErro(true)
            setCorDeErro("erro")
        } else {

            // Não sei porque não está postando :(

            await api.post(
                'pius',
                { text: piuTexto },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
        }
    }

    
    return(
        <S.NovoPiuContainer>
            {mensagemErro && <span className={corDeErro} >Número de caracteres inválidos.</span>}
            <S.Post>
                <S.ImgPerfilContainer>
                    <S.ImgPerfil src={user.photo} alt={user.first_name} />
                </S.ImgPerfilContainer>
                <form>
                    <S.TextArea
                        className={corDeErro} 
                        placeholder="Dê um piu!"
                        onChange={e => {
                            const value = e.target.value
                            setPiuTexto(value)
                            const piuLength = value.length
                            setContador(piuLength)
                        }}
                    >
                    </S.TextArea>
                    <S.BotaoPostar onClick={postarPiu}>Postar</S.BotaoPostar>
                </form>
                <S.Contador className={corDeErro}>{contador}/140</S.Contador>
            </S.Post>
        </S.NovoPiuContainer>
    )
}

export default PostarPiu;