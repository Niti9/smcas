import React, { useState } from "react";
import "../../app/globals.css";

const PopupButton3 = () => {
  return (
    <>
    {/* desktop version */}
      <div className="hidden lg:block">
        
        <div className=" container">
          <div className="PopUpTitleDiv">
            Foundation Batches
            <div className="pb-4  text-3xl font-medium pt-4 text-center md:text-center ">
              [11th , 12th & Undergraduate Students]
            </div>
          </div>
          <div className="PopUpLine border" />
          <div className="PopUpCard  ">Features:</div>
        </div>

        {/* Text  */}
        <div className="flex flex-row ml-4">
          <div className="PopUpPara5 ml-4">
            <div className=" flex    ml-4">
              * ६ वी ते १२ वी पर्यंतच्या पुस्तकांवर आधारित.
            </div>
            <div className=" flex    ml-4">
              * UPSC/ MPSC च्या पूर्व परीक्षेचा संपूर्ण अभ्यासक्रम.
            </div>
            <div className=" flex    ml-4">
              * मागील सर्व वर्षांच्या आयोगाच्या प्रश्नपत्रिका आणि दैनंदिन
            </div>
            <div className=" flex    ml-4">सराव परीक्षा.</div>
            <div className=" flex    ml-4">
              * यूपीएससीच्या मुलाखतीचा अनुभव असलेले दिल्लीचे तज्ञ
            </div>
            <div className=" flex    ml-4">मार्गदर्शक.</div>
            <div className=" flex    ml-4">
              * MPSC / UPSC ची तयारी करणाऱ्या सर्व विद्यार्थ्यांसाठी
            </div>
            <div className=" flex    ml-4">उपयुक्त.</div>
            <div className=" flex    ml-4">
              * English, मराठी व हिंदी माध्यमातून मार्गदर्शन.
            </div>
          </div>
          <div className="PopUpPara6 ml-4">
            <div className=" flex    ml-4">
              * अभ्यासातील Overall Performance Improvement करणे.
            </div>
            <div className=" flex    ml-4">
              *( Study Improvement Programme SIP)
            </div>
            <div className=" flex    ml-4">
              * Free Career Counselling sessions.
            </div>
          </div>
        </div>
      </div>


      {/* mobile version */}
      <div className="lg:hidden block">
        
        <div className=" w-full h-auto font-feature-settings font-rubik">
          <div className="titleColor text-center text-[24px]  font-bold 
      md:PopUpTitleDiv1">
            Foundation Batches
            <div className="pb-2 sm:pb-4  text-2xl sm:text-3xl font-medium pt-2 sm:pt-4 text-center md:text-center  ">
              [11th , 12th & Undergraduate Students]
            </div>
          </div>
          <div className="PopUpLine border" />
        </div>
        <div
         className="   pl-[1rem] !text-start text-[#2C3131]
       text-[18px] font-semibold  font-rubik font-feature-settings  "
       >
         Features:{" "}
       </div>

        {/* Text  */}
        <div className="flex flex-col  w-full h-auto pb-4 ">
          <div className="text-[14px] text-justify text-nowrap   px-4 ">
            <div >
              * ६ वी ते १२ वी पर्यंतच्या पुस्तकांवर आधारित.
            </div>
            <div >
              * UPSC/ MPSC च्या पूर्व परीक्षेचा संपूर्ण अभ्यासक्रम.
            </div>
            <div >
              * मागील सर्व वर्षांच्या आयोगाच्या प्रश्नपत्रिका आणि दैनंदिन
            </div>
            <div >सराव परीक्षा.</div>
            <div >
              * यूपीएससीच्या मुलाखतीचा अनुभव असलेले दिल्लीचे तज्ञ
            </div>
            <div >मार्गदर्शक.</div>
            <div >
              * MPSC / UPSC ची तयारी करणाऱ्या सर्व विद्यार्थ्यांसाठी
            </div>
            <div >उपयुक्त.</div>
            <div >
              * English, मराठी व हिंदी माध्यमातून मार्गदर्शन.
            </div>
         
         
            <div >
              * अभ्यासातील Overall Performance Improvement 
            </div>
            <div >
            करणे.
            </div>
            <div >
              *( Study Improvement Programme SIP).
            </div>
            <div >
              * Free Career Counselling sessions.
            </div>
          </div>
        </div>
        </div>


    </>

  );
};

export default PopupButton3;
