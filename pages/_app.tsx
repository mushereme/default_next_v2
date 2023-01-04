import React from "react";
import { AppProps } from 'next/app'
import Head from "next/head";
import { AuthProvider } from "../contexts/AuthContext";
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { 
  Layout
} from "antd";

import "../i18n";
import "antd/dist/reset.css";
import '../styles/global.css';

const { Header, Content, Footer } = Layout;

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <HelmetProvider>
      <Helmet 
        titleTemplate="%s | Annual general meeting"
      />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <AuthProvider>
        <Header className='bg-white'></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </AuthProvider>
    </HelmetProvider>
  )
}

export default MyApp
