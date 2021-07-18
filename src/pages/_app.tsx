import AppProvider from 'hooks';
import { AuthProvider } from 'hooks/auth';
import { AppProps } from 'next/app';
import React from 'react';
import { GlobalStyles } from 'styles';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <AuthProvider>
                <AppProvider>
                    <GlobalStyles />
                    <Component {...pageProps} />
                </AppProvider>
            </AuthProvider>
        </>
    );
}

export default MyApp;
