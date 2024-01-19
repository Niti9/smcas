// import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIAL } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="flexCenter mb-24">
//       <div className="padding-container max-container flex w-full flex-col gap-14">
//         <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">

//         <div className="flex-col items-start justify-center gap-[3%] md:flex-row">
//           <Link href="/" className="mb-10">
//             <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
//           </Link>
//           <ul className="regular-14 flex  pt-4  text-gray-30">
//             {SOCIAL.description}
//           </ul>
//           <ul className="regular-14 flex pt-10 text-gray-30">
//               {SOCIAL.links.map((link) => (
//                 <Link href="/" key={link}>
//                   <Image src={link} alt="logo" width={24} height={24} />
//                 </Link>
//               ))}
//             </ul>
//             </div>

//           {/* social title */}

//           {/* contact us  */}

//           <div className="flex  gap-10 sm:justify-between md:flex-1">
//             {
//               <div className="flex flex-col gap-5">
//                 <FooterColumn title={FOOTER_CONTACT_INFO.title}>
//                 {FOOTER_CONTACT_INFO.title}
//                 <p className=" regular-14 text-gray-30 m-auto  justify-center pr-10 whitespace-nowrap">
//                   {FOOTER_CONTACT_INFO.description}
//                 </p>
//                   <ul className="regular-14 flex flex-col gap-4 text-gray-30">
//                     {FOOTER_CONTACT_INFO.links.map((link) => (
//                       <Link href="/" key={link}>
//                         {/* {link} */}
//                         <p className="whitespace-nowrap">{link}</p>
//                       </Link>
//                     ))}
//                   </ul>
//                 </FooterColumn>
//               </div>
//             }

//             {/* quick links */}
//             <div className="flex flex-col gap-5">
//               <FooterColumn title={FOOTER_LINKS.title}>
//               {FOOTER_LINKS.title}
//               <ul className="regular-14 flex flex-col gap-4 text-gray-30">
//                 {FOOTER_LINKS.links.map((link) => (
//                   <Link
//                     href="/"
//                     key={link}
//                     className="flex gap-4 md:flex-col lg:flex-row"
//                   >
//                     {/* {link} */}
//                     <p className="whitespace-nowrap">{link}</p>
//                   </Link>
//                 ))}
//                 </ul>
//               </FooterColumn>
//             </div>
//           </div>
//         </div>

//         {/* social part should be here */}
//         {/* <div className="flex flex-col gap-5">
//           <FooterColumn title={SOCIAL.title}>
//             {SOCIAL.description}
//             <ul className="regular-14 flex gap-4 text-gray-30">
//               {SOCIAL.links.map((link) => (
//                 <Link href="/" key={link}>
//                   <Image src={link} alt="logo" width={24} height={24} />
//                 </Link>
//               ))}
//             </ul>
//           </FooterColumn>
//         </div> */}

//         {/* footer ke niche ki line */}
//         <div className="border bg-gray-20" />
//         <p className="regular-14 w-full text-center text-gray-30">
//           2023 SMCAS. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// // FooterColumn component
// const FooterColumn = ({ title, children }) => {
//   return (
//     <div className="flex flex-col gap-5">
//       <h4 className="bold-18 whitespace-nowrap">{children}</h4>
//     </div>
//   );
// };

// export default Footer;









// /** CORRECT POSITION DEFINING  */
// import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIAL } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="flexCenter mb-24">
//       <div className="padding-container max-container flex w-full flex-col gap-14">
//         <div className="flex flex-col items-start justify-center gap-[10%] sm:justify-between md:flex-row">
//           <div className="flex-col items-start justify-center gap-[3%] md:flex-row">
//             {/* Logo */}
//             <Link href="/" className="mb-10">
//               <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
//             </Link>

//             {/* Social media icons and text */}
//             <ul className="regular-14 flex  pt-4  text-gray-30">
//               {SOCIAL.description}
//             </ul>
//             <ul className="regular-14 flex pt-10 text-gray-30">
//               {SOCIAL.links.map((link) => (
//                 <Link href="/" key={link}>
//                   <Image src={link} alt="logo" width={24} height={24} />
//                 </Link>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div className="flex-col   gap-5 sm:justify-between md:flex-row">
//             <div className="flex jutify-center mb-4px md:flex-col">
//               <h1 className="bold-17">{FOOTER_CONTACT_INFO.title}</h1>
//               <ul className="regular-14 flex-col  sm:justify-between md:flex-row mr-28 text-gray-30">
//                 {FOOTER_CONTACT_INFO.description}
//               </ul>
//             </div>

//             <div className="regular-14 flex-col gap-[1.1rem] mt-5 text-gray-30">
//               <ul className="regular-14 flex flex-col gap-[1.1rem] text-gray-30">
//                 {FOOTER_CONTACT_INFO.links.map((link) => (
//                   <Link href="/" key={link}>
//                     <p className="whitespace-nowrap">{link}</p>
//                   </Link>
//                 ))}
//               </ul>
//               <ul className="flex-col regular-14 mr-[19rem] space-x-2 pt-4 text-gray-30">
//                 {FOOTER_CONTACT_INFO.label}
//               </ul>
//             </div>
//           </div>

//           {/* Quick Links  */}
//           <div className="flex-col   gap-5 sm:justify-between md:flex-row ">
//             <div className="flex justify center mb-4px   md:flex-col">
//               <h1 className="bold-17 ">{FOOTER_LINKS.title}</h1>
//             </div>
//             <ul className="flex flex-col gap-4 mr-32 text-gray-30">
//               {FOOTER_LINKS.links.map((link) => (
//                 <Link
//                   href="/"
//                   key={link}
//                   className="flex gap-4 md:flex-col  m-1 lg:flex-row"
//                 >
//                   <p className="whitespace-nowrap">{link}</p>
//                 </Link>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="border  bg-gray-20" />
//         <p className="regular-14 w-full text-center text-gray-30">
//           2023 SMCAS. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// const FooterColumn = ({ title, children }) => {
//   return (
//     <div className="flex flex-col gap-5">
//       <h4 className="bold-18 whitespace-nowrap">{children}</h4>
//     </div>
//   );
// };

// export default Footer;












/** CORRECT COLOR COMBINATION */

// import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIAL } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { CiMail } from "react-icons/ci";
// import {IoCallOutline } from "react-icons/io5";
// import { GrLocation } from "react-icons/gr";

// const Footer = () => {
//   return (
//     <footer className="flexCenter bg-slate-50  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
//       <div className="padding-container max-container flex w-full flex-col gap-4">
//         <div className="flex flex-col items-start justify-center gap-[10%] sm:justify-between md:flex-row">
//           <div className="flex-col pt-2 items-start justify-center gap-[3%] md:flex-row">
            
//             {/* Logo */}
//             <Link href="/" className="mb-10 ">
//               <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
//             </Link>

//             {/* Social media icons and text */}
//             <ul className="regular-14 flex  pt-4  text-black">
//               {SOCIAL.description}
//             </ul>
//             <ul className="regular-14 flex pt-10 text-black">
//               {SOCIAL.links.map((link) => (
//                 <Link href="/" key={link}>
//                   <Image src={link} alt="logo" width={24} height={24} />
//                 </Link>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div className="flex-col   gap-5 sm:justify-between md:flex-row">
//             <div className="flex jutify-center mb-4px md:flex-col">
//               <h1 className="bold-17 text-black">{FOOTER_CONTACT_INFO.title}</h1>
//               <ul className="regular-14 flex-col  sm:justify-between md:flex-row mr-28 text-black">
//                 {FOOTER_CONTACT_INFO.description}
//               </ul>
//             </div>

//             <div className="regular-14 flex-col gap-[1.1rem] mt-5 text-black">
//               <ul className="regular-14 flex flex-col gap-[1.1rem] text-black">
               
//                 {FOOTER_CONTACT_INFO.links.map((link) => (
//                   <Link href="/" key={link}>
//                     <p className="whitespace-nowrap">{link}
//                     </p>
//                   </Link>
//                 ))}
                
              
//               </ul>
//               <ul className="flex-col regular-14 mr-[18rem] space-x-2 pt-4 text-black ">
//               <GrLocation className="inline  text-green-600 font[700pxa] h-4 w-4 "   />
//               {FOOTER_CONTACT_INFO.label}
//               </ul>
//             </div>
//           </div>

//           {/* Quick Links  */}
//           <div className="flex-col   gap-5 sm:justify-between md:flex-row ">
//             <div className="flex justify center mb-4px   md:flex-col">
//               <h1 className="bold-17 text-black">{FOOTER_LINKS.title}</h1>
//             </div>
//             <ul className="flex flex-col gap-4 mr-32 text-black">
//               {FOOTER_LINKS.links.map((link) => (
//                 <Link
//                   href="/"
//                   key={link}
//                   className="flex gap-4 md:flex-col  m-1 lg:flex-row"
//                 >
//                   <p className="whitespace-nowrap">{link}</p>
//                 </Link>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="border  bg-white" />
//         <p className="regular-14 w-full  mb-4 text-center text-gray-700">
//          © 2023 SMCAS. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// const FooterColumn = ({ title, children }) => {
//   return (
//     <div className="flex flex-col gap-5">
//       <h4 className="bold-18 whitespace-nowrap">{children}</h4>
//     </div>
//   );
// };

// export default Footer;








/*** after changes of icon and color combination */

// import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIAL } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { CiMail } from "react-icons/ci";
// import {IoCallOutline } from "react-icons/io5";
// import { GrLocation } from "react-icons/gr";
// import { Foot2 } from "./Foot2";
// import ArrowButton from "./ArrowButton";

// const Footer = () => {
//   return (
//     <footer className="flexCenter bg-slate-50  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
//       <div className="padding-container max-container flex w-full flex-col gap-4">
//         <div className="flex flex-col items-start justify-center gap-[10%] sm:justify-between md:flex-row">
//           <div className="flex-col pt-2 items-start justify-center gap-[3%] md:flex-row">
            
//             {/* Logo */}
//             <Link href="/" className="mb-10 ">
//               <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
//             </Link>

//             {/* Social media icons and text */}
//             <ul className="regular-14 flex  pt-4  text-black">
//               {SOCIAL.description}
//             </ul>
//             <ul className="regular-14 flex pt-10 text-black">
              

//                 <Link href="/" >
//                   <Image 
//                   src={SOCIAL.link1} alt="logo" width={24} height={24} />
//                 </Link>
//                 <Link href="/" >
//                   <Image src={SOCIAL.link2} alt="logo" width={24} height={24} />
//                 </Link>
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div className="flex-col   gap-5 sm:justify-between md:flex-row">
//             <div className="flex jutify-center mb-4px md:flex-col">
//               <h1 className="bold-17 text-black">{FOOTER_CONTACT_INFO.title}</h1>
//               <ul className="regular-14 flex-col  sm:justify-between md:flex-row mr-28 text-black">
//                 {FOOTER_CONTACT_INFO.description}
//               </ul>
//             </div>

//             <div className="regular-14 flex-col gap-[1.1rem] mt-5 text-black">
//               <ul className="regular-14 flex flex-col gap-[1.1rem] text-black">
               
//                   <Link href="/" >
//                     <p className="whitespace-nowrap">
//                     <CiMail className="inline text-green-700 font-[700px] h-5 w-5" /> {FOOTER_CONTACT_INFO.links}
//                       </p>
//                     <p className="whitespace-nowrap">
//                     <IoCallOutline className="inline text-green-700 font[700pxa] h-5 w-5"/>{FOOTER_CONTACT_INFO.links2}
//                     </p>
//                   </Link>
                
//               </ul>
//               <ul className="flex-col regular-14 mr-[18rem] space-x-2 pt-4 text-black ">
//               <GrLocation className="inline  text-green-600 font[700pxa] h-4 w-4 "   />
//               {FOOTER_CONTACT_INFO.label}
//               </ul>
//             </div>
//           </div>

//           {/* Quick Links  */}
//           <div className="flex-col   gap-5 sm:justify-between md:flex-row ">
//             <div className="flex justify center mb-4px   md:flex-col">
//               <h1 className="bold-17 text-black">{FOOTER_LINKS.title}</h1>
//             </div>

            
           
//             <Foot2/>
            
            
//           </div>
//         </div>


//           {/* <Link className="cursor-pointer"
//           href="#top"
//          >
//         <div className="fixed bottom-10 right-10  rounded-full overflow-hidden ">
//           <svg stroke="currentColor" fill="currentColor"
//           strokeWidth="0" viewBox="0 0 448 512"
//           className="text-[#3c3d3c] w-14 md:w-16 h-auto"
//           height="1em"
//           xmlns="http://www.w3.org/2000/svg">
//             <path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z">
              
//             </path>
//           </svg>

//         </div>
//           </Link> */}

         


//         <ArrowButton/>

          
//         <div className="border  bg-white" />
//         <p className="regular-14 w-full  mb-4 text-center text-gray-700">
//          © 2023 SMCAS. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// const FooterColumn = ({ title, children }) => {
//   return (
//     <div className="flex flex-col gap-5">
//       <h4 className="bold-18 whitespace-nowrap">{children}</h4>
//     </div>
//   );
// };

// export default Footer;






/** final code */

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIAL } from "@/constants";
import { SiInstagram } from "react-icons/si";
import { LuFacebook } from "react-icons/lu";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { Foot2 } from "./Foot2";
import ArrowButton from "./ArrowButton";

const Footer = () => {
  return (
    <footer className="flexCenter bg-slate-50   shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
      <div className="padding-container max-container flex w-full flex-col gap-4">
        <div className="flex flex-col items-start justify-center 
      text-wrap  sm:gap-[1.15rem] lg:gap-[10%] sm:justify-between  md:flex-row">
          <div className="flex-col pt-2 items-start justify-center  md:flex-row pb-8">
            {/* Logo */}
            <a href="/">
              <Image src="/SMCAS.png" alt="logo" width={140} height={100} />
            </a>

            {/* Social media icons and text */}
            <ul className="regular-14 flex  pt-[1.5rem]  text-black _font-rubik7">
              {SOCIAL.description}
            </ul>
            <ul className="regular-14 flex pt-10 text-black gap-4 ">
              <a href="/">
                <LuFacebook src={SOCIAL.link1} 
                className="bg-orange-400 w-[35px] p-2 h-[35px] text-white rounded-full" />
               

              </a>
              <a href="/">
                <SiInstagram src={SOCIAL.link2} 
                 className=" w-[35px]  h-[35px] text-black border-1 rounded-full"/>
              </a>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex-col    gap-5 sm:justify-between  md:flex-row pb-8">
            <div className="flex jutify-center mb-4px md:flex-col">
              <h1 className=" text-black _font-rubik9 sm:justify-between ">
                {FOOTER_CONTACT_INFO.title} 
              </h1>
              
            </div>

            <ul className="regular-14 _font-rubik8 flex-col  sm:justify-between md:flex-row mr-8 text-black pb-4">
                {FOOTER_CONTACT_INFO.description}
              </ul>

            <div className="regular-14 flex-col gap-[1.1rem] mt-3 text-black">
              <ul className="regular-14 flex flex-col gap-[1.1rem] text-black ">
                <p className="whitespace-nowrap _font-rubik5 ">
                  <CiMail className="inline text-green-700 font-[700px] h-5 w-5" />{" "}
                  {FOOTER_CONTACT_INFO.links}
                </p>
                <p className="whitespace-nowrap _font-rubik5">
                  <IoCallOutline className="inline text-green-700 font[700pxa] h-5 w-5" />
                  {FOOTER_CONTACT_INFO.links2}
                </p>
              </ul>
            </div>
              <ul className="flex-col regular-14  xl:mr-[3rem] space-x-2 pt-4 text-black _font-rubik5  ">
                <GrLocation className="inline  text-green-600 font[700pxa] h-4 w-4 " />
                <div className="inline  ">
                  {FOOTER_CONTACT_INFO.label1}
                  {FOOTER_CONTACT_INFO.label2}
                  {FOOTER_CONTACT_INFO.label3}
                </div>
              </ul>
          </div>

          {/* Quick Links  */}
          <div className="flex-col  text-[14px]   font-rubik  gap-5 sm:justify-between  md:flex-row ">
            <div className="flex justify center mb-4px   md:flex-col">
              <h1 className=" text-black _font-rubik9">
                {FOOTER_LINKS.title}
              </h1>
            </div>

            <Foot2 />
          </div>
        </div>

        <ArrowButton />

        <div className="border  bg-white " />
        <p className="regular-14 w-full  mb-4 text-center text-gray-700">
          © 2024 SMCAS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{children}</h4>
    </div>
  );
};

export default Footer;
