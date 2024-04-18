import React from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

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
// const Hero = () => {
//   return (
//     <div className="relative">
//       <Image
//         src="/student.png" // Update with your image path
//         alt="Background"
//         className="w-full h-auto xl:pl-6 xl:w-[1350px] xl:h-[720px] "
//         width={1350}
//         height={720}
        
//       />

//       <div
//         className="absolute inset-0 flex items-center justify-center
//       "
//       >
//         <div
//           className="text-center text-[#FFFFFF]   
//         lg:pt-20
//          xl:pl-52 xl:pr-52 xl:pt-[500px] xl:pb-[342px] "
//         >
//           <h1
//             className="  text-[18px] mt-4   px-4 leading-normal font-bold 
//            sm:text-[36px] md:text-[36px] lg:text-[56px] md:font-bold lg:leading-[66px]
//            xl:text-[60px]
//             font-feature-settings 
//         font-rubik  "
//           >
//             UPSC/MPSC/Foundation Integrated Coaching centre
//           </h1>
//           <p
//             className="text-[8px]  px-2  sm:px-4
//            md:px-12  md:text-[16px] 
//              lg:text-[20px] xl:pl-0 xl:pr-0 xl:text-[28px]"
//           >
//             UPSC Program inauguration at Indira
//             Institute of Business Management
//           </p>

//           <div
//             className="flexCenter  justify-center items-center  text-[12px] pt-1 md:pt-0
        
//         md:text-[14px] md:p-2 md:font-normal 
//         lg:text-[24px]  xl:text-[28px]
//             "
//             id="Test"
//           >
//             {/* Enroll now button */}
//             <Link href="https://wa.me/+918605954303">
//               <button
//                 type="button"
//                 title="Enroll Now"
//                 className=" py-2 px-3 sm:p-4 lg:mt-4 lg:px-6 lg:py-6  
               
//                font-feature-settings font-rubik 
//                bg-[#FF8112] text-white border rounded-full 
//                border-[#FF8112] 
               
//                "
//               >
//                 Enroll Now
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;





/**new code to add image slide**/
import React from "react";
import ImageSlider1 from './ImageSlider1';

const Hero = () => {

  const slides = [
    {
      image: '/student.png',
      className: "w-full h-300 xl:px-6 xl:w-[1350px] xl:h-[720px]",
      text: "UPSC/MPSC/Foundation Integrated Coaching centre",

      id: 'slide1',
    },
    {
      image: '/smcasLandingPage.jpg',
      className: "w-full h-[420px] sm:w-[768px] sm:h-[500px] lg:w-[1500px] lg:h-[2100px] rounded-3xl",


      id: 'slide2',
    }
  ];

  return (
<section>
      <ImageSlider1 slides={slides} interval={3000} />
</section>
  );
};

export default Hero;


