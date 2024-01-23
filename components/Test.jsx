

/** final code  */
import React from "react";

const Test = () => {
  return (
    <>
      <div  id="PrelimsTest" className=" pt-8 pb-4">
        <h1 className="font-bold text-4xl text-center md:text-[38px] text-[#2C3131]
         font-rubik font-feature-settings
        bg-white flex-col px-4" >
          Prelims Test Series
        </h1>
      </div>


     {/*Code for mobile as well as desktop
     sirf 1044px par galti ho rhi hai baaki scren par sahi se work kar rha hai*/}
     <div className=" w-full h-auto " >   
     <img
        src="/comingSoon.png" // Update with your image path
        alt="Background"
        className="w-full h-auto "
      />
        
        {/* For footer link */}
        <div id="about"></div>
      </div>
    </>
  );
};

export default Test;
