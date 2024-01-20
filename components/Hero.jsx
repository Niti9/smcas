// import React from 'react'
// import Button from './Button'

// const Hero = () =>{
//     return (

//         <card className='max-container bg-red-700 padding-container flex flex-col
//         gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>

//         <div className='hero-map'/>

//         <div className=' relative z-20 flex flex-1 flex-col xl:w-1/2'>
//             <h1 className='bold-52 lg:bold-88'>
//                 UPSC/MPSC/Foundation Integrated Coaching Centre
//             </h1>
//             <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
//             We want to be on each of your journeys seeking the satisfaction
//           of seeing the incorruptible beauty of nature. We can help you on
//           an adventure around the world in just one app.
//             </p>

//             <div className='my-11 flex flex-wrap gap-5'>
//                 <div className='flex flex-col w-full gap-3 sm:flex-row'>
//                     <Button
//                     type="button"
//                     title="Enroll Now"
//                     variant="btn_white_text"
//                     />
//                 </div>
//             </div>

//         </div>
//         </card>
//     )
// }

// export default Hero

/** Change shape and position of elements */
// import React from 'react'
// import Button from './Button'

// const Hero = () =>{
//     return (

//         <card className=' rounded-3xl bg-gray-50  flex flex-col
//         gap-20 py-10 pb-32 md:gap-28 lg:py-20
//          xl:flex-row' >

//         <div className=' relative mt-20   pr-12 pl-12 mr-56  ml-56 z-20 flex flex-1 flex-col xl:w-1/2'>
//             <h1 className='bold-29  lg:bold-52  text-center text-white pr-12 pl-12'>
//                 UPSC/MPSC/Foundation Integrated Coaching Centre
//             </h1>
//             <p className='regular-16  text-white mt-6  pr-1 pl-1 mr-44 ml-44 text-center  xl:max-w-[520px]'>
//             {/* We want to be on each of your journeys seeking the satisfaction
//           of seeing the incorruptible beauty of nature. We can help you on
//           an adventure around the world in just one app. */}
//           Lorem ipsum dolor sir amet consectetur adispiscing elit semper dalar elementum tempus hac tellus libero accumsan an adventure around the world in just one app
//             </p>

//             <div className='my-11  flex flex-wrap gap-5'>
//                 <div className='flex  ml-80 mr-80 flex-col w-full gap-3 sm:flex-row' >
//                     <Button
//                     type="button"
//                     title="Enroll Now"
//                     variant="btn_yellowNav"
//                     />
//                 </div>
//             </div>

//         </div>
//         </card>

//     )
// }

// export default Hero

/** Try to make code responsive also for mobile screen */

import React from "react";
import Button from "./Button";
import Link from "next/link";

// const Hero = () => {
//   return (
//     <>

//     <div className="container">

//     {/* <img src="/student.png" alt="student"/ > */}

//       {/* <div
//         className="flex flex-col rounded-3xl
//         gap-20 py-10 pb-32 md:gap-28 lg:py-5
//          xl:flex-row md:flex-col "
//       > */}
//       <div className="container">

//         <div
//           className="container"
//           style={{
//             // use the src property of the image object
//             backgroundImage: `url(${backgroundImage.src})`,
//             // other styles
//             // backgroundPosition: "center",
//             // backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//             width: "100vw",
//             height: "100vh",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <div className=" relative mt-20   pr-12 pl-12 mr-56  ml-56 z-20 flex flex-1 flex-col xl:w-1/2">
//             <h1
//               style={{ fontSize: 50, color: "white" }}
//               className="heroTitle lg:bold-52  text-center text-white pr-12 pl-12 w-[812px] h-[132px] "
//             >
//               UPSC/MPSC/Foundation Integrated Coaching Centre
//             </h1>

//             <p
//               className=" regular-16 w-[574px] h-[60px] pt-96
//                 mt-6   mr-36 ml-44 text-center  xl:max-w-[520px]  "
//             >
//               {/* We want to be on each of your journeys seeking the satisfaction
//           of seeing the incorruptible beauty of nature. We can help you on
//           an adventure around the world in just one app. */}
//               UPSC Program inauguration on the 5th of January 2023 at Indira
//               Institute of Business Management
//             </p>

//             <div className="my-11  flex flex-wrap gap-5">
//               <div className="flex  ml-80 mr-80 flex-col w-full gap-3 sm:flex-row">
//               <Link href="https://wa.me/+918605954303">
//                 <Button
//                   type="button"
//                   title="Enroll Now"
//                   variant="enrollButton"
//                   height={240}
//                   width={240}
//                 />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>

//     </>
//   );
// };

// components/ImageWithOverlay.js
const Hero = () => {
  return (
    <div className="relative">
      <img
        src="/student.png" // Update with your image path
        alt="Background"
        className="w-full h-auto xl:pl-6 xl:w-[1350px] xl:h-[720px] "
      />
     

      <div
        className="absolute inset-0 flex items-center justify-center
      "
      >
        <div className="text-center text-[#FFFFFF]   
        lg:pt-20
         xl:pl-52 xl:pr-52 xl:pt-[500px] xl:pb-[342px] ">
          <h1
            className="  text-[18px] mt-4   px-4 leading-normal font-bold 
           md:text-[36px] lg:text-[56px] md:font-bold lg:leading-[66px]
           xl:text-[60px]
            font-feature-settings 
        font-rubik  "
          >
            UPSC/MPSC/Foundation Integrated Coaching centre
          </h1>
          <p
            className="text-[8px]  px-4  sm:pl-8 sm:pr-8
           md:pl-16 md:pr-16  md:text-[16px] 
             lg:text-[18px] xl:pl-0 xl:pr-0 xl:text-[20px]" 
          >
            UPSC Program inauguration on the 5th of January 2023 at Indira
            Institute of Business Management
          </p>


          <div
            className="flexCenter  justify-center items-center  text-[15px] pt-1 md:pt-0
        
        md:text-[14px] md:p-2 md:font-normal 
        lg:text-[20px]  xl:text-[24px]
            "
            id="Test"
          >
            {/* Enroll now button */}
            <Link href="https://wa.me/+918605954303">
              <button
                type="button"
                title="Enroll Now"
                className=" py-2 px-4 sm:p-4 lg:mt-10 lg:pl-6 lg:pr-6  
               
               font-feature-settings font-rubik 
               bg-[#FF8112] text-white border rounded-full 
               border-[#FF8112] 
               
               "
              >
                Enroll Now
              </button>
            </Link>
          </div>

          
        </div>
      </div>
    </div>


  
  // <div className="relative">
  //   <img
  //     src="/student.png" // Update with your image path
  //     alt="Background"
  //     className="w-full h-auto"
  //   />

  //   <div className="absolute inset-0 flex items-center justify-center">
  //     <div className="text-center text-[#FFFFFF] p-4 lg:pt-20 xl:pl-52 xl:pr-52">
  //       <h1 className="text-[20px] mt-4 leading-normal font-normal md:text-[36px] lg:text-[56px] md:font-bold lg:leading-[66px] xl:text-[60px] font-feature-settings font-rubik">
  //         UPSC/MPSC/Foundation Integrated Coaching centre
  //       </h1>
  //       <p className="text-[8px] sm:pl-8 sm:pr-8 md:pl-16 md:pr-16 md:text-[16px] lg:text-[18px] xl:pl-0 xl:pr-0 xl:text-[20px]">
  //         UPSC Program inauguration on the 5th of January 2023 at Indira Institute of Business Management
  //       </p>

  //       <div className="flexCenter justify-center items-center text-[6px] pt-[8px] md:text-[14px] md:p-2 lg:text-[20px] xl:text-[24px]" id="Test">
  //         {/* Enroll now button */}
  //         <Link href="https://wa.me/+918605954303">
  //           <button
  //             type="button"
  //             title="Enroll Now"
  //             className="p-1 sm:p-4 lg:mt-10 lg:pl-6 lg:pr-6 font-feature-settings font-rubik bg-[#FF8112] text-white border rounded-full border-[#FF8112]"
  //           >
  //             Enroll Now
  //           </button>
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // </div>


  );
};

export default Hero;
