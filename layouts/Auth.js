import React from "react";
import { useTranslation } from "react-i18next";

const Auth = ({children}) => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-50">
      <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container flex items-center justify-center">
        <div className="xl:w-1/3 md:w-1/2 lg:ml-16 ml-8 md:mt-0">
          <div className="flex items-start">
            <p className="sm:text-2xl text-xl leading-7 text-gray-600 pl-2.5">{t("auth_login_title")}</p>
          </div>
          <div className="flex items-start mt-2">
            <p className="sm:text-lg text-lg leading-7 text-gray-600 pl-2.5">{t("auth_login_description")}</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Auth;