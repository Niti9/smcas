"use client";
// components/PopupButton.js
import React, { useState } from "react";
import Popup from "./Popup";
import "../../app/globals.css";

const PopupButton3 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="">

      

        <div className=" container">
          <div className="PopUpTitleDiv">
            Foundation Batches
            <div className="pb-4  text-3xl font-medium pt-4 text-center md:text-center ">
              [11th , 12th & Undergraduate Students]
            </div>
          </div>
          <div className="PopUpLine border"/>
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
            <div className=" flex    ml-4">
            सराव परीक्षा.
            </div>
            <div className=" flex    ml-4">
            * यूपीएससीच्या मुलाखतीचा अनुभव असलेले दिल्लीचे तज्ञ
            </div>
            <div className=" flex    ml-4">
            मार्गदर्शक. 
            </div>
            <div className=" flex    ml-4">
            * MPSC / UPSC  ची तयारी करणाऱ्या सर्व विद्यार्थ्यांसाठी 
            </div>
            <div className=" flex    ml-4">
            उपयुक्त.
            </div>
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
  );
};

export default PopupButton3;
