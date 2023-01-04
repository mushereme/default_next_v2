import React, { useContext, useEffect } from 'react';
import Head from "next/head";
import { useTranslation } from "react-i18next";
import AuthContext from "../context/AuthContext";


/************************************************************************************************************************
                                              START: MAIN INFORMATION 
=========================================================================================================================

	Created By		: Munkh-Erdne   
	Date			    : 2022-11-05
	Function		  : Index page

	Modification History: 
    Change code: 
      01 - Bug fixing

  --------------------------------------------------------------------------------------------------------
  Modify Date    App Version    Modified By    Change Code    Reason for modification   Summary 
  -------------------------------------------------------------------------------------------------------- 
  2022-11-05     v1.0.0         Munkh-erdene   01             Bug fixing                Uploader not working properly 

=========================================================================================================================
                                                 END: MAIN INFORMATION
=========================================================================================================================
*************************************************************************************************************************/

/*************************************************** START: DEBUG *******************************************************/
const debug = true;  // if true console will be visible
/**************************************************** END: DEBUG ********************************************************/


export default function SignUpPage() {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title></title>
      </Head>
      <div>{t("Search")}</div>
    </div>
  )
}