import React from "react";
import '../styles/tailwind.css'
import 'antd/dist/antd.css'
import { AppProps } from 'next/app'
import { AuthStore } from "../context/AuthContext";
import { HelmetProvider, Helmet } from 'react-helmet-async';

import "../i18n";
import { 
  Layout
} from "antd";

import Head from "next/head";

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
      </Head>
      <AuthStore>
        <Header className='bg-white'></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </AuthStore>
    </HelmetProvider>
  )
}

export default MyApp
