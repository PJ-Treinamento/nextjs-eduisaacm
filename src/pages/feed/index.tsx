import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import {api} from "services/api";

import { parseCookies } from 'nookies';

import * as I from '../../models';

import { useAuth } from "hooks/auth";

import Piu from "components/Piu";
import Header from "components/Header";
import NavBar from "components/NavBar";
import PostarPiu from "components/NovoPiu";

import * as S from './style';


interface FeedProps {
    pius: I.Piu[],
    user: I.User
}

const Feed: NextPage<FeedProps> = ({pius, user}) => { //poderia também ter colocado apenas "props" dentro dos parênteses e acessar os users depois como "props.users"

    
    
    const [filtro, setFiltro] = useState('')

    const [piusFiltrados, setPiusFiltrados] = useState(pius)

    useEffect(() => {
        setPiusFiltrados(pius.filter((piu: I.Piu) => piu.user.first_name.toLowerCase().startsWith(filtro.toLowerCase())))
    }, [filtro])

    return (
        <div>
            <Header/>
            <S.Main>
                <NavBar />
                <S.Conteudo>
                    <PostarPiu user={user}/>
                    <S.BarraDePesquisa>
                        <div>
                            <S.InputStyle className="input-block">
                                <label htmlFor="Pesquisa de usurários">Pesquise os pius</label>
                                <input type="Text" id="Pesquisa de usuários" onChange={event => setFiltro(event.target.value)}/>
                            </S.InputStyle>
                        </div>
                    </S.BarraDePesquisa>
                    {piusFiltrados.map((piu: I.Piu) => {
                        return (
                            <Piu 
                                key={piu.id} 
                                piu={piu} 
                                user={user}
                            />)
                    })}
                    <S.Nenhum>Nenhum outro piu. :(</S.Nenhum>
                </S.Conteudo>
            </S.Main>
        </div>
    )
}

export default Feed;
  
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    
    const { 'next-piupiwer.token': token} = parseCookies(ctx);
    const { 'USERNAME':username} = parseCookies(ctx);

    console.log(token)

    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }

    console.log("oi1")

    console.log(token)

    const response = await api.get('/pius', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const userPrimary = await api.get(`/users?username=${username}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const pius: I.Pius = response.data;
    const user: I.User = userPrimary.data[0];

    return {
        props: {
            pius,
            user
        }
    }
}