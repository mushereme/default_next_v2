import React, { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'

import { loadApi } from "../utils/axios/main";
import { isValidToken, setSession } from "../utils/jwt.js";

const AuthContext = createContext();


/************************************************************************************************************************
                                              START: MAIN INFORMATION 
=========================================================================================================================

	Created By		: Munkh-Erdne   
	Date			    : 2022-11-05
	Function		  : Banner context

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


export const AuthStore = (props) => {

  const initialState = {
    loading: false,
    error: false,
    success: false,
    detail: {},
    isAuthenticated: false,
  }

  const router = useRouter();    
  const [ state, setState ] = useState(initialState);

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      console.log("$:/context/auth/initialize/accesstoken ", accessToken);

      if(accessToken && isValidToken(accessToken)){
        console.log("$:/context/auth/initialize/validtoken");
        setSession(accessToken);
        
        setState({
          ...state,
          isAuthenticated: true,
        });
      } else {
        console.log("$:/context/auth/initialize/invalidtoken");
        setState({
          ...state,
          isAuthenticated: false,
        });
        router.push("/auth/signin");
      }
    } catch (err) {
      console.log("$:/context/auth/initialize/err ", err);
    };
  };

  const signIn = async (email, password) => {

    let body = { email, password };
    const response = await axios.post("/users/login", body);

    console.log("$:/context/auth/signin/response ", response);
  };

  return (
    <AuthContext.Provider
      value={{
        state,
      }}
    >
      {props.children}
    </AuthContext.Provider>    
  );
};


export default AuthContext;