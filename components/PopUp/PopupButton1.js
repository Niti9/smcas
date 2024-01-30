"use client";
// components/PopupButton.js
import React, { useState } from "react";
import "../../app/globals.css";

const PopupButton1 = () => {
  return (
    <>
      <div className="hidden lg:block">
        <div className=" container">
          <div className="PopUpTitleDiv ">
            UPSC Integrated Batches
            <div className="pb-4  text-3xl font-medium pt-4 text-center md:text-center ">
              [9 month Batch]
            </div>
          </div>
          <div className="PopUpLine border" />
          <div className="PopUpCard  ">Features:</div>
          {/* Text  */}
        </div>
        <div className="flex flex-row">
          <div className="PopUpPara1 ml-4 ">
            <div className=" flex   ">
              * Targeted to crack the exam in the first attempt.
            </div>
            <div className="flex">* Weekly prelim and mains test.</div>
            <div className="flex">
              * Daily prelim and main answer writing session.
            </div>
            <div className="flex  ">
              * Daily The Hindu Editorial Discussion.
            </div>
            <div className="flex">
              * Regular Personal guidance and counselling.
            </div>
            <div className="flex">sessions.</div>
            <div className="flex ">
              * Focus on developing the right approach.
            </div>
          </div>

          <div className="PopUpPara2 ml-4 ">
            <div className="flex ml-4">
              *Thought process and application of knowledge.
            </div>
            <div className="flex ml-4">
              * Systematic approach to syllabus competition.
            </div>
            <div className="flex ml-4">* Expert and Experienced faculty.</div>
            <div className="flex ml-4">
              * Small size of batches (45 to 50 students).
            </div>
            <div className="flex ml-4">
              * Special focus on student doubt clearance
            </div>
            <div className="flex ml-4">
              * Regular current affairs-based answer writing
            </div>
            <div className="flex ml-6">session.</div>
            <div className="flex ml-3">
              * Quality Enrichment session by selected candidate.
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden block">
        <>
          {/* Title */}
          <div className=" w-full h-auto font-feature-settings font-rubik ">
            <div
              className="  titleColor text-center text-[24px]  font-bold 
      
          md:PopUpTitleDiv1 "
            >
              UPSC Integrated Batches
              <div className="pb-2 sm:pb-4  text-2xl sm:text-3xl font-medium pt-2 sm:pt-4 text-center md:text-center ">
                [9 month Batch]
              </div>
            </div>
            <div className="PopUpLine border" />

            {/* Text  */}
          </div>

          <div
            className="   pl-[1rem] !text-start text-[#2C3131]
       text-[18px] font-semibold  font-rubik font-feature-settings 
         "
          >
            Features:{" "}
          </div>

          <div className="flex flex-col  w-full h-auto pb-4 ">
            <div className="text-[14px] text-justify text-nowrap   px-2 ">
              <li>Targeted to crack the exam in the first attempt.</li>
              <li>Weekly prelim and mains test.</li>
              <li>Daily prelim and main answer writing session.</li>
              <li>Daily The Hindu Editorial Discussion.</li>
              <li>Regular Personal guidance and counselling.</li>

              <li>Focus on developing the right approach, thought</li>

              <p className="ml-5"> process and application of knowledge.</p>
              <li>Systematic approach to syllabus competition.</li>
              <li> Expert and Experienced faculty.</li>
              <li>Small size of batches (45 to 50 students).</li>
              <li>Special focus on student doubt clearance.</li>
              <li>Regular current affairs-based answer writing session.</li>
              <li>Quality Enrichment session by selected candidate.</li>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default PopupButton1;
