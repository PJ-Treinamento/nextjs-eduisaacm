import React, {useState, useCallback } from "react";
// import Link from 'next/link';

import { useAuth } from "../../hooks/auth";

import { useForm } from 'react-hook-form';

import * as S from "./style";

interface LoginPopUpProps{
    onClose: () => void,
    id?: string
}



const LoginPopUp: React.FC<LoginPopUpProps> = ({ id='modal', onClose}) => {

    const [mensagemVazio, setMensagemVazio] = useState(false);

    const [mensagemErro, setMensagemErro] = useState(false);


    const { register, handleSubmit } = useForm();

    const { login } = useAuth();

    const doLogin = useCallback(async (data) => {
        (data.email.length == 0 || data.password.length == 0) && setMensagemVazio(true);
        (data.email.length > 0 && data.password.length > 0) && setMensagemVazio(false)
        const user = await login(data.email, data.password);
        (!user && data.email.length > 0 && data.password.length > 0) && setMensagemErro(true)   
    
    }, [login]);

    const onlyOutsideClick = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as Element;
        if (target.id === id) onClose();
    }


    return(
        <S.PopupContainer id="modal" onClick={() => onlyOutsideClick}>
            <div className="container">
                <S.Fechar onClick={onClose}/>
                <S.Titulo>Fazer o login</S.Titulo>
                {mensagemVazio && <S.Erro>Todos os campos devem estar preenchidos.</S.Erro>}
                {mensagemErro && <S.Erro>E-mail ou senha incorreto.</S.Erro>}
                <S.Form onSubmit={ handleSubmit(doLogin) }>
                    <S.InputStyle className="input-block">
                        <label htmlFor="E-mail">E-mail</label>
                        <input
                            {...register('email')}
                            type="text" 
                            id="E-mail"
                        />
                    </S.InputStyle>
                    <S.InputStyle className="input-block">
                        <label htmlFor="Senha">Senha:</label>
                        <input 
                            {...register('password')}
                            type="password"
                            id="Senha"
                        />
                    </S.InputStyle>
                    <S.Botao>Entrar</S.Botao>
                    {/* onClick={doLogin}  */}
                </S.Form>
            </div>
        </S.PopupContainer>
    );

}

export default LoginPopUp;