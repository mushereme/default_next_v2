import React, { useContext, useEffect } from 'react';
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function IndexPage() {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>AGM</title>
      </Head>
      <div>{t("Search")}</div>
    </div>
  )
}