import React from "react";

const Auth = ({children}) => {

  return (
    <div className="bg-gray-50">
      <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container flex items-center justify-center">
        <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
          {children}
        </div>
    </div>
</div>
  )
}

export default Auth;