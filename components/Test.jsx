

/** final code  */
import React from "react";

const Test = () => {
  return (
    <>
      <div className="pb-12" id="PrelimsTest">
        <h1 className="font-bold text-[36px] text-center text-black
         font-rubik font-feature-settings
        bg-white flex-col">
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
