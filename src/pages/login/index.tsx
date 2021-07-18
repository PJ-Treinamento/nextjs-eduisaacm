import React, {useState} from "react";
import Image from 'next/image';

import * as S from './styles';
import LoginPopUp from '../../components/LogingPopUp';

import fundoLogin from "../../assets/images/fundo-login.png";
import Logo from "../../assets/images/logo.svg";
import { parseCookies } from "nookies";



function LoginPage() {

    


    const [isModalVisible, setIsModalVisible] = useState(false);

    return(
        <div>
            <S.Fundo>
                <S.Conteudo>
                    <Image
                        className="logo" 
                        src={ Logo } 
                        alt="Piupiwer"
                        width={100}
                        height={100}
                    />
                    <div>
                        <S.Titulo><S.TituloCor1>Piu</S.TituloCor1><S.TituloCor2>piwer</S.TituloCor2></S.Titulo>
                        <S.FraseDeEfeito className="legenda">Conectando passarinhos de todo o mundo</S.FraseDeEfeito>
                        <S.Botoes>
                        <li>
                            <S.Botao1 className="buttons">Cadastrar</S.Botao1>
                        </li>
                        <li>
                            <S.Botao2 className="buttons" onClick={() => setIsModalVisible(true) }>Entrar</S.Botao2>
                            {isModalVisible && 
                            <LoginPopUp 
                                onClose={() => setIsModalVisible(false)}
                            >
                            </LoginPopUp>
                            }
                        </li>
                        </S.Botoes>
                    </div>
                    
                </S.Conteudo>
                <Image
                    className="imagem-fundo"
                    src={fundoLogin} 
                    alt="Conecte-se com o Piupiwer."
                    width={500}
                    height={625}
                />
            </S.Fundo>
        </div>

    );
}

export default LoginPage;