"use client";
// components/PopupButton.js
import React, { useState } from "react";
import Popup from "./Popup";
import "../../app/globals.css";

const PopupButton2 = () => {
  

  return (
   
      
      <>
      {/* Desktop version */}
      <div className="hidden lg:block">
          <>
        <div className=" container">
          <div className="PopUpTitleDiv">
            MPSC Integrated Batches
            <div className="pb-4  text-3xl font-medium pt-4 text-center md:text-center ">
              [9 month Batch]
            </div>
          </div>
          <div className="PopUpLine border"/>
          <div className="PopUpCard  ">Features:</div>
        </div>

        {/* Text  */}
          <div className="flex flex-row ml-4">

          <div className="PopUpPara3 ml-4">
              <div className=" flex    ml-4">
                * Targeted to crack the exam in the first attempt.
              </div>
              <div className=" flex    ml-4">
                * Delhi Pattern वरती आधारित.
              </div>
              <div className=" flex   ml-4 ">
              * एम सी क्यू ची तयारी करून
              </div>
              <div className=" flex    ml-4">
              (5000 Questions) घेण्यात येईल.
              </div>
              <div className=" flex    ml-4">
              * प्रत्येक आठवड्यास weekly test programme.
              </div>
              <div className=" flex    ml-4">
              * वयैक्तिक समपुदेशन व मार्गदर्शन .
              </div>
              <div className=" flex    ml-4">
              * अभ्यासक्रम शिकवताना Exam Oriented Systematic 
              </div>
              <div className=" flex   ml-4 ">
                Approach.
              </div>
              <div className=" flex    ml-4">
              * उत्कृष्ट आणि अनभुवी शिक्षक.
              </div>
              <div className=" flex    ml-4">
              * एका बॅच मध्ये फक्त 40 ते 45 विद्यार्थी .
              </div>
           
            
            
            
            
            
           
            
            
          </div>
          <div className="PopUpPara4 ml-4">
              <div className=" flex   ">
              * विद्यार्थ्यांचेशंका निरसन करण्यासाठी Doubt Clearance Sessions.
              </div>
              <div className=" flex   ">
              * दररोज Current Affairs Topics वर चर्चा .
              </div>
              <div className=" flex   ">
              * Quality Enrichment Sessions by Selected Candidates.
              </div>
              <div className=" flex   ">
              * दररोज Current Affairs Topics वर चर्चा .
              </div>
              <div className=" flex   ">
              * मराठी ,English व हिदं ी माध्यमातनू तयारी करून घेणारी टीम.
              </div>
              <div className=" flex   ">
              * MPSC Prelims and Mains ची Integrated Approach 
              </div>
              <div className=" flex   ">
               नेतयारी करून घेण्यात येईल.
              </div>
              <div className=" flex   ">
              * विषय व घटक निहाय सराव पेपरची तयारी.
                महत्त्वाच्या 
              </div>
                <div className=" flex   ">
                विषयांवर विशषे कार्यशाळा.
                </div>
            

            
            
            

          </div>
          </div>
          </>
        </div>

        

        {/* for mobile version*/}
        <div className="lg:hidden block">
          <>
        <div className="  w-full h-auto font-feature-settings font-rubik ">
          <div className="titleColor text-center text-[24px]  font-bold 
      md:PopUpTitleDiv1 ">
            MPSC Integrated Batches
            <div className="pb-2 sm:pb-4  text-2xl sm:text-3xl font-medium pt-2 sm:pt-4 text-center md:text-center  ">
              [9 month Batch]
            </div>
          </div>
          <div className="PopUpLine border"/>
          
        </div>
        <div
         className="   pl-[1rem] !text-start text-[#2C3131]
       text-[18px] font-semibold  font-rubik font-feature-settings  "
       >
         Features:{" "}
       </div>
        {/* Text  */}
          <div className="flex flex-col  w-full h-auto pb-4 ">

          <div className="text-[14px] text-justify text-nowrap   px-4">
              <div >
                * Targeted to crack the exam in the first attempt.
              </div>
              <div>
                * Delhi Pattern वरती आधारित.
              </div>
              <div >
              * एम सी क्यू ची तयारी करून
              </div>
              <div >
              (5000 Questions) घेण्यात येईल.
              </div>
              <div >
              * प्रत्येक आठवड्यास weekly test programme.
              </div>
              <div >
              * वयैक्तिक समपुदेशन व मार्गदर्शन .
              </div>
              <div >
              * अभ्यासक्रम शिकवताना Exam Oriented Systematic 
              </div>
              <div >
                Approach.
              </div>
              <div >
              * उत्कृष्ट आणि अनभुवी शिक्षक.
              </div>
              <div >
              * एका बॅच मध्ये फक्त 40 ते 45 विद्यार्थी .
              </div>
              <div   >
              * विद्यार्थ्यांचेशंका निरसन करण्यासाठी Doubt Clearance 
              </div>
              <div   >
               Sessions.
              </div>
              <div   >
              *  दररोज Current Affairs Topics वर चर्चा .
              </div>
              <div   >
              * Quality Enrichment Sessions by Selected 
              </div>
              <div   >
              Candidates.
              </div>
              <div >
              * दररोज Current Affairs Topics वर चर्चा .
              </div>
              <div >
              * मराठी ,English व हिदं ी माध्यमातनू तयारी करून 
              </div>
              <div >
              घेणारी टीम.
              </div>
              <div >
              * MPSC Prelims and Mains ची Integrated Approach
              </div>
              <div >
               नेतयारी करून घेण्यात येईल.
              </div>
              <div >
              * विषय व घटक निहाय सराव पेपरची तयारी.
                महत्त्वाच्या 
              </div>
                <div >
                विषयांवर विशषे कार्यशाळा.
                </div>
                </div >
          </div>
          </>
        </div>

          
         
     </>
 
  );
};

export default PopupButton2;
