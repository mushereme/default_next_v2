import React, { useEffect } from "react";

import { Image } from "antd";


/************************************************************************************************************************
                                              START: MAIN INFORMATION 
=========================================================================================================================

	Created By		: Munkh-Erdne   
	Date			    : 2022-11-05
	Function		  : Top banner linked to e-card.bkocapital.mn

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


const Card01 = (props) => {

  const { bannerContext } = props;

  useEffect(() => {
    bannerContext.getEcardBanners();
  }, [])

  const state = bannerContext.state;

  if(debug) {
    console.log("$:/ecard/banner ", state.ecard);
    console.log("$:/ecard/banner ", state.ecard.length);
  }

  if(state.ecard.length > 0) {
   return (
    <div className="">
      <div className="container mx-auto my-12">
        <div className="">
          <a href="http://e-giftcard.bkocapital.mn">
            <Image src={state?.ecard[0]?.imageUrl} height="200px" width="100%" className="object-cover rounded-xl" preview={false}/>
          </a>
        </div>
      </div>
     </div>
    )
  } else {
    return <></>
  }
}

export default Card01;