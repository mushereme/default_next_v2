import React, { useContext, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet-async';

import AuthLayout from "../../layouts/Auth";
import SignIn from "../../components/auth/signin";

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


export default function IndexPage() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet title="Sign in"/>
      <AuthLayout>
        {/* {t("Welcome back")} */}
        <SignIn />
      </AuthLayout>
    </div>
  )
}