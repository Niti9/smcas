"use client";
// components/PopupButton.js
import React, { useState } from "react";
import Popup from "./Popup";
import "../../app/globals.css";

const PopupButton1 = () => {
  

  return (

      
      <>
      <div className=" container">
          <div className="PopUpTitleDiv">
            UPSC Integrated Batches
            <div className="pb-4  text-3xl font-medium pt-4 text-center md:text-center ">
              [9 month Batch]
            </div>
          </div>
          <div className="PopUpLine border"/>
          <div className="PopUpCard  ">Features:</div>
        {/* Text  */}
        </div>
          <div className="flex flex-row">

          <div className="PopUpPara1 ml-4">
              <div className=" flex   ">
              * Targeted to crack the exam in the first attempt.
            </div>
              <div className="flex">
              * Based on Delhi Pattern.
            </div>
              <div className="flex">
              * Weekly prelim and mains test.
            </div>
              <div className="flex">
              * Daily prelim and main answer writing session.
            </div>
              <div className="flex  ">
              * Daily The Hindu Editorial Discussion.
            </div>
              <div className="flex">
              * Regular Personal guidance and counselling.
            </div>
              <div className="flex">
               sessions.
            </div>
              <div className="flex ">
              * Focus on developing the right approach, 
            </div>
          </div>

          <div className="PopUpPara2 ml-4 ">
          <div className="flex ml-4 ">
               * thought process and application of knowledge.
            </div>
          <div className="flex ml-4">
          * Systematic approach to syllabus competition
            </div>
          <div className="flex ml-4">
          * Expert and Experienced
            faculty.
            </div>
          <div className="flex ml-4">
          * Small size of batches (45 to 50 students) 
            </div>
          <div className="flex ml-4">
          * Special focus on
            student doubt clearance
            </div>
          <div className="flex ml-4">
          * Regular current affairs-based answer writing
            session.
            </div>
          <div className="flex ml-4">
          * Quality Enrichment session by selected candidate. 
            </div>
           
          </div>
        </div>

          
    </>
    
  );
};

export default PopupButton1;
