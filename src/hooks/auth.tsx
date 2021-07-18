import React, {createContext, useContext, useEffect, useState} from 'react';
import {api} from '../services/api';
import { User } from '../models/index';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

import Router from 'next/router';

interface AuthContextData {
    username: string;
    token: string; 
    login (
        email:string,
        password:string
    ): Promise<User | undefined>;
    logout (): Promise<void>;
}

interface AuthState {
    username: string;
    token: string;
}


export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [userData, setUserData] = useState<AuthState>(() => {
        return {} as AuthState;
    });

    useEffect(() => {

        const { 'nextauth.token' : token } = parseCookies();

        const { 'USER' : username} = parseCookies();

        setUserData({ token, username})
    }, [])

	const login = async ( email: string, password: string ) => {
        console.log(email, password);
        try{
            const response = await api.post('/sessions/login', {
                email,
                password,
            });

            const { token, user } = response.data;

            const username = user.username

            api.defaults.headers.Authorization = `Bearer ${token}`;

            setCookie(undefined, 'next-piupiwer.token', token, { // precisa de um yarn add @types/cookies
                maxAge: 60 * 60 * 1, // 1 hora
            })


            setCookie(undefined, 'USERNAME', user.username, {
               maxAge: 60 * 60 * 1, 
            })

      
            setUserData({ token, username });

            Router.push('/feed')

            return user as User;

        } catch(error) {
            console.log(error);
            console.log("EAE VACILÃO")
        }
    };

    const logout = () => {
        destroyCookie(undefined, 'next-piupiwer.token');
        destroyCookie(undefined, 'USERNAME');
        setUserData({} as AuthState);
        Router.push('/');
    };
  
    return (
        <AuthContext.Provider 
            value={
                {
                    login,
                    username: userData.username,
                    token: userData.token,
                    logout,

                }
            }
        >
            { children }

        </AuthContext.Provider>
    )
}
        
export const useAuth = ():AuthContextData => {
    const useAuthContext = useContext(AuthContext)
    return useAuthContext;
}