// import React from "react";

// export const List = ({ id, title, links, desc, text }) => {
//     // id print karne ke liye 'key' ek special keyword hai isliye kaam nahi karta
//     //isliye humein kuch aur keyword use karke hi id print karni hogi
//     //   console.log({id});
//     return (
//         <div className=' padding-container max-container rounded-3xl  border-8
//          pt-2 pb-24 flex w-full flex-col gap-4 '>
//             <div className='flex flex-col  bold-17 mb-4 text-center  gap-[10%] sm:justify-between md:flex-row  justify-center'>
//                 <div className=' items-start    md:flex-row justify-center'>

//                     <h1 className='flex flex-col mt-[-4] gap-1 text-white bg-green-50 '>
//                       {title}

//                       <div className="regular-14 bold-12">
//                             {desc}
//                         </div >
//                     </h1>

//                     <div className="border  bg-white" />

//                 </div>
//             </div>
//             <div className="bold-18 ">

//                 {text}
//             </div>
//             <div className="bg-green-50">

//                 {links}
//             </div>
//         </div>

//     );
// };

// import React from "react";

// export const List = ({ id, title, links, desc, text }) => {
//   return (
//     <div className="container max-w-full mx-auto p-4">
//       <div className="max-w-[800px] mx-auto bg-white border-8 border-green-500 rounded-3xl overflow-hidden">
//         <div className="flex flex-col gap-4 p-6">
//           <div className="flex flex-col md:flex-row justify-center items-center">
//             <h1 className="text-3xl font-bold text-center md:text-left md:mr-6">
//               {title}
//             </h1>
//             <div className="border-t md:border-t-0 md:border-b border-r bg-green-500 h-full" />
//             <div className="md:w-1/2 p-4">
//               <div className="text-sm font-bold">{desc}</div>
//             </div>
//           </div>
//           <div className="text-xl">{text}</div>
//           <div className="bg-green-500 p-4">{links}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React from "react";
// import Button from "../Button";

// export const List = ({ id, title, links, desc, text }) => {
//   return (
//     <>
//       <div className="container max-w-full mx-auto p-4  " >
//         <div className="max-w-[800px] mx-auto bg-white border-2 border-green-500 rounded-3xl overflow-hidden ml-4 ">
//           <div className=" md:grid-cols-2 ">
//             <div className="p-6 flex flex-col justify-center items-center md:items-start pl-12 bg-green-50 text-white text-center">
//               <h1 className="text-3xl font-bold text-center md:text-center " >
//                 {title}
//               </h1>
//               <div className="text-sm font-bold text-center md:text-center pl-12  ">
//                 {desc}
//               </div>
//             </div>
//             {/* <div className="border-t md:border-t-0 md:border-b border-r bg-green-500 h-full" /> */}
//             <div className="border-1  bg-green-50  " />

//             <div className="p-6 flex flex-col ">
//               <div className="bold-18">{text}</div>
//               <div className="">
//                 <div className="flex flex-col">{links}</div>
//               </div>

//               <div className=" p-20 flex flex-col gap-4" >
//                 <Button
//                   type="button"
//                   title="Learn more"
//                   variant="btn_orange"
//                 />
//                 <Button
//                   type="button"
//                   title="Apply Now"
//                   variant="btn_yellow1"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import React from "react";
import PopupButton from "../PopUpButton";
import Link from "next/link";

// import '../PopUp/Pop.css';

export const List = ({
  id,
  title,
  desc,
  text,
  links1,
  links2,
  links3,
  links4,
  links5,
  links6,
  links7,
}) => {
  const phoneNumber = "123456789"; // Replace with the desired phone number

  const handleDialClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    /** original */
    // <>
    //   <div className="pb-12 ">
    //     {/* <div className="border-2 border-[#45BC41] rounded-3xl overflow-hidden  courseBorder listContainer "> */}
    //       <div className="  rounded-3xl  courseBorder overflow-hidden
    //       w-[399px] h-[700px] flex-shrink-0 listContainer2  ">
    //       <div className="md:grid-cols-2 ">
    //         <div
    //           className="w-[399px] h-[123.255px]
    //          flex-shrink-0 rounded-bl-0 rounded-br-0 rounded-tl-2 rounded-tr-2 bg-gradient
    //         p-6 flex flex-col justify-center items-center md:items-start pl-12
    //           text-center
    //             "
    //         >
    //           <h1
    //             className="text-white _title  font-bold leading-38
    //           text-3xl text-center md:text-center "
    //           >
    //             {title}
    //           </h1>

    //           {desc && (
    //             <div className="pb-4 text-white text-sm font-bold text-center md:text-center pl-12">
    //               {desc}
    //             </div>
    //           )}
    //         </div>
    //         {/* <div className="border-t md:border-t-0 md:border-b border-r bg-green-500 h-full" /> */}
    //         <div className="border-1 courseBorder  " />

    //         <div className="p-4 flex flex-col courseCardList">
    //           <div className="text-xl font-bold ">{text}</div>
    //           <div className="text-base
    //           text-[#2C3131] font-rubik font-normal leading-7">
    //             <div className="flex flex-col font-[10px]">{links1}</div>
    //             <div className="flex flex-col">{links2}</div>
    //             <div className="flex flex-col">{links3}</div>
    //             <div className="flex flex-col">{links4}</div>
    //             <div className="flex flex-col">{links5}</div>
    //             <div className="flex flex-col">{links6}</div>
    //             <div className="flex flex-col">{links7}</div>
    //           </div>
    //         </div>

    //         <div className="padding flex flex-col gap-4 "
    //         >
    //         {/* Learn More button */}
    //         <div className="flexCenter  justify-center items-center gap-3">
    //         <PopupButton id={id} />

    //         </div>

    //         <div className="flexCenter  justify-center items-center gap-3
    //         "  id="Test">
    //         {/* Enroll now button */}
    //       <Link href="https://wa.me/+918605954303">
    //         <button type="button"
    //           title="Enroll Now"

    //            className="listButton2"
    //             >
    //               Enroll Now
    //           <p >
    //            <svg className=" inline "width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //           <g id="call">
    //           <path id="Vector" d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
    //           </g>
    //           </svg>

    //           </p>
    //         </button>
    //       </Link>

    //         </div>
    //        </div>
    //       </div>
    //     </div>
    //   </div>

    // </>

    <>
      <div
        className="w-full max-w-fit  border-0  sm:max-w-[356px]  sm:items-center 
    
      rounded-3xl   overflow-hidden h-full md:h-[750px] shrink-0 listContainer2  "
      >
        <div className="flex-center flex-col gap-2.5   ">
          <div
            className="h-auto w-full
            
               lg:h-[123.255px]
           bg-gradient  
            p-6 flex flex-col justify-center items-center md:items-start 
              text-center 
                "
          >
            {/* <div
              className="h-auto w-full

              lg:w-full lg:h-[123.255px]
             flex-shrink-0 rounded-bl-0 rounded-br-0 rounded-tl-2 rounded-tr-2 bg-gradient 
            p-6 flex flex-col justify-center items-center md:items-start pl-12 
              text-center 
                "
            > */}
            <h1
              className="text-white w-full font-rubik font-feature-settings font-bold leading-8
               text-3xl justify-center  align-middle text-center md:text-center "
            >
              {title}
            </h1>

            {desc && (
              <div
                className="pb-4 text-white 
                text-sm w-full   font-bold text-center md:text-center "
              >
                {desc}
              </div>
            )}
          </div>

          <div className="border-0 courseBorder  " />

          <div
            className="flex-between mt-4 px-4 pb-4
            
         
            
            h-[360px]
            "
          >
            <div className="text-xl font-bold ">{text}</div>
            <div
              className="text-lg
              text-[#2C3131] font-rubik font-normal leading-7"
            >
              <div className="flex flex-col font-[10px]">{links1}</div>
              <div className="flex flex-col">{links2}</div>
              <div className="flex flex-col">{links3}</div>
              <div className="flex flex-col">{links4}</div>
              <div className="flex flex-col">{links5}</div>
              <div className="flex flex-col">{links6}</div>
              <div className="flex flex-col">{links7}</div>
            </div>
          </div>

          <div
            className=" flex flex-col gap-4 mt-8 mx-4
            sm:mx-0 sm:mt-0 
            p-8"
          >
            {/* Learn More button */}
            <div className="flexCenter  justify-center items-center gap-3">
              <PopupButton id={id} />
            </div>

            <div
              className="flexCenter  justify-center items-center gap-3
            "
              id="Test"
            >
              {/* Enroll now button */}
              <Link href="https://wa.me/+918605954303">
                <button
                  type="button"
                  title="Enroll Now"
                  className=" inline-flex
               px-6 py-6 justify-center
               items-center
               gap-1
               border-1 rounded-full
               bg-[#FF8112]
               text-[#FFF]
              text-center
               font-feature-settings font-rubik
               text-lg
              sm:text-xl
               font-normal
                leading-6
              "
                >
                  Enroll Now
                  <p>
                    <svg
                      className=" inline "
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="call">
                        <path
                          id="Vector"
                          d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
