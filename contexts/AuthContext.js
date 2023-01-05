import React, { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'

import axios from "../utils/axios";
import { isValidToken, setSession } from "../utils/jwt.js";

/************************************************************************************************************************
                                              START: MAIN INFORMATION 
=========================================================================================================================

	Created By		: Munkh-Erdne   
	Date			    : 2022-11-05
	Function		  : Auth context

	Modification History: 
    Change code: 
      01 - Bug fixing

  --------------------------------------------------------------------------------------------------------
  Modify Date    App Version    Modified By    Change Code    Reason for modification   Summary 
  -------------------------------------------------------------------------------------------------------- 

=========================================================================================================================
                                                 END: MAIN INFORMATION
=========================================================================================================================
*************************************************************************************************************************/

const AuthContext = createContext();

const initialState = {
  loading: false,
  success: false,
  error: false,
  message: "",
  detail: {},
  isAuthenticated: false,
};

const AuthProvider = (props) => {

  const router = useRouter();    
  const [ state, setState ] = useState(initialState);

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");

      if(accessToken && isValidToken(accessToken)){
        setSession(accessToken);
        
        setState({
          ...state,
          isAuthenticated: true,
        });
      } else {
        setState({
          ...state,
          isAuthenticated: false,
        });
        router.push("/auth/signin");
      }
    } catch (err) {
      setState({
        ...state,
        isAuthenticated: false,
        detail: {}
      })
    };
  };

  const signIn = async ({email, password}) => {

    setState({
      ...state,
      loading: true,
      success: false, 
      message: "",
    });

    var config = {
      url: "/users/login",
      method: "post",
      data: { email, password }
    };

    try {
      const response = await axios(config);
      const { accessToken, data } = response.data;

      setSession(accessToken);
      setState({
        ...state,
        success: true,
        detail: data,
        loading: false,
        isAuthenticated: true,
      });
      router.push("/");
    } catch (err) {
      setState({
        ...state,
        success: false,
        message: err,
        loading: false,
      });
    };
  };

  const signUp = async (email, password) => {

    let body = { email, password };
    try {
      const response = await axios.post("/users/login", body);
      console.log("$:/context/auth/signin/response ", response);
    } catch (err) {
      console.log("$:/context/auth/signin/error ", err);
    }
  };

  const signOut = () => {
    setSession(null);
    setState({
      ...state,
      loading: false,
      success: false,
      error: false,
      message: "",
      isAuthenticated: false,
      detail: {}
    });
    router.push("/auth/signin");
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        signIn,
        signOut,
        signUp,
      }}
    >
      {props.children}
    </AuthContext.Provider>    
  );
};

export { AuthContext, AuthProvider };
