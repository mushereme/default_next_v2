import React, { useContext, useEffect } from 'react';
import Head from "next/head";
import { useTranslation } from "react-i18next";
import useAuth from "../hooks/useAuth";
import { Button } from 'antd';

export default function IndexPage() {
  const { t } = useTranslation();

  const { signOut } = useAuth();

  return (
    <div>
      <Head>
        <title>AGM</title>
      </Head>
      <Button onClick={() => signOut()}>SignOut</Button>
      <div>{t("Search")}</div>
    </div>
  )
}