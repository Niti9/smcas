

import React from "react";
import Image from 'next/image';

const Test = () => {
  return (
    <>
      <div  id="PrelimsTest" className=" pt-8 pb-4">
        <h1 className="font-bold text-4xl text-center md:text-[38px] text-[#2C3131]
         font-rubik font-feature-settings
        bg-white flex-col sm:px-4" >
          Prelims Test Series
        </h1>
      </div>


     {/*Code for mobile as well as desktop
     sirf 1044px par galti ho rhi hai baaki scren par sahi se work kar rha hai*/}
     <div className=" w-full h-auto " >   
     <Image
        src="/comingSoon.png" // Update with your image path
        alt="Background"
        className="w-full h-auto "
        height={811}
        width={1519}
      />
        
        {/* For footer link */}
        <div id="about"></div>
      </div>
    </>
  );
};

export default Test;
