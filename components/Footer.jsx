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
        <div
          className="flex flex-col items-start justify-center 
      text-wrap  sm:gap-[1.15rem] lg:gap-[10%] sm:justify-between  md:flex-row"
        >
          <div className="flex-col pt-2 items-start justify-center  md:flex-row pb-8">
            {/* Logo */}
            <Link href="/">
              <Image src="/SMCAS.png" alt="logo" width={140} height={100} />
            </Link>

            {/* Social media  description */}
            <ul className="regular-14 flex  pt-[1.5rem] pb-4  text-black _font-rubik7">
              {SOCIAL.description}
            </ul>

            {/* Social Media icons */}
            <ul>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="68"
                height="28"
                viewBox="0 0 68 28"
                fill="none"

              >
                <Link href={SOCIAL.link1}>
                  <circle cx="14" cy="14" r="14" fill="#FFAB5D" />
                  <path
                    d="M12.7087 20.3038V14.7503H10.8398V12.5859H12.7087V10.9898C12.7087 9.13752 13.84 8.12891 15.4924 8.12891C16.2839 8.12891 16.9642 8.18784 17.1624 8.21417V10.1499L16.0164 10.1505C15.1178 10.1505 14.9438 10.5775 14.9438 11.2041V12.5859H17.087L16.8079 14.7503H14.9438V20.3038H12.7087Z"
                    fill="white"
                  />
                </Link>

                <Link href={SOCIAL.link2} >
                  <circle cx="54" cy="14" r="13.5" stroke="#D4D4D8" />
                  <path
                    d="M54.0008 8.44721C55.8095 8.44721 56.0237 8.45398 56.7382 8.48656C57.1678 8.49182 57.5933 8.5707 57.9962 8.71979C58.2884 8.83248 58.5538 9.00511 58.7753 9.22656C58.9967 9.44802 59.1694 9.71339 59.282 10.0056C59.4311 10.4085 59.51 10.8341 59.5153 11.2637C59.5475 11.9782 59.5546 12.1924 59.5546 14.0011C59.5546 15.8098 59.5479 16.024 59.5153 16.7385C59.51 17.1681 59.4311 17.5936 59.282 17.9966C59.1694 18.2888 58.9967 18.5541 58.7753 18.7756C58.5538 18.997 58.2884 19.1697 57.9962 19.2824C57.5933 19.4315 57.1678 19.5103 56.7382 19.5156C56.024 19.5479 55.8098 19.5549 54.0008 19.5549C52.1917 19.5549 51.9775 19.5482 51.2633 19.5156C50.8337 19.5103 50.4082 19.4315 50.0053 19.2824C49.7131 19.1697 49.4477 18.997 49.2262 18.7756C49.0048 18.5541 48.8322 18.2888 48.7195 17.9966C48.5704 17.5936 48.4915 17.1681 48.4862 16.7385C48.454 16.024 48.4469 15.8098 48.4469 14.0011C48.4469 12.1924 48.4537 11.9782 48.4862 11.2637C48.4915 10.8341 48.5704 10.4085 48.7195 10.0056C48.8322 9.71339 49.0048 9.44802 49.2262 9.22656C49.4477 9.00511 49.7131 8.83248 50.0053 8.71979C50.4082 8.5707 50.8337 8.49182 51.2633 8.48656C51.9779 8.4543 52.192 8.44721 54.0008 8.44721ZM54.0008 7.22656C52.162 7.22656 51.9304 7.2343 51.2079 7.26721C50.6456 7.27839 50.0893 7.38485 49.5627 7.58205C49.1109 7.75226 48.7017 8.019 48.3637 8.36366C48.0187 8.70184 47.7517 9.11127 47.5814 9.56334C47.3842 10.09 47.2777 10.6463 47.2666 11.2085C47.2343 11.9304 47.2266 12.162 47.2266 14.0008C47.2266 15.8395 47.2343 16.0711 47.2672 16.7937C47.2784 17.3559 47.3848 17.9122 47.582 18.4388C47.7522 18.8908 48.0189 19.3002 48.3637 19.6385C48.7019 19.9832 49.1113 20.25 49.5633 20.4201C50.09 20.6173 50.6463 20.7238 51.2085 20.7349C51.9311 20.7672 52.1617 20.7756 54.0014 20.7756C55.8411 20.7756 56.0717 20.7679 56.7943 20.7349C57.3565 20.7238 57.9128 20.6173 58.4395 20.4201C58.8893 20.2457 59.2978 19.9794 59.6389 19.6381C59.98 19.2968 60.246 18.8882 60.4201 18.4382C60.6173 17.9115 60.7238 17.3553 60.735 16.793C60.7672 16.0711 60.775 15.8395 60.775 14.0008C60.775 12.162 60.7672 11.9304 60.7343 11.2079C60.7231 10.6456 60.6167 10.0893 60.4195 9.56269C60.2493 9.11068 59.9826 8.70126 59.6379 8.36301C59.2996 8.01828 58.8902 7.75153 58.4382 7.5814C57.9115 7.3842 57.3553 7.27775 56.793 7.26656C56.0711 7.2343 55.8395 7.22656 54.0008 7.22656Z"
                    fill="#090914"
                  />
                  <path
                    d="M54.0021 10.5234C53.3141 10.5234 52.6416 10.7275 52.0695 11.1097C51.4974 11.492 51.0515 12.0353 50.7882 12.6709C50.5249 13.3066 50.4561 14.006 50.5903 14.6808C50.7245 15.3556 51.0558 15.9755 51.5423 16.462C52.0288 16.9485 52.6487 17.2798 53.3235 17.414C53.9983 17.5482 54.6977 17.4794 55.3334 17.2161C55.969 16.9528 56.5123 16.5069 56.8946 15.9348C57.2768 15.3627 57.4809 14.6902 57.4809 14.0021C57.4809 13.0795 57.1144 12.1947 56.462 11.5423C55.8096 10.8899 54.9248 10.5234 54.0021 10.5234ZM54.0021 16.2602C53.5555 16.2602 53.119 16.1278 52.7476 15.8797C52.3763 15.6315 52.0869 15.2789 51.916 14.8663C51.7451 14.4537 51.7003 13.9996 51.7875 13.5616C51.8746 13.1236 52.0897 12.7213 52.4055 12.4055C52.7213 12.0897 53.1236 11.8746 53.5616 11.7875C53.9996 11.7003 54.4537 11.7451 54.8663 11.916C55.2789 12.0869 55.6315 12.3763 55.8797 12.7476C56.1278 13.119 56.2602 13.5555 56.2602 14.0021C56.2602 14.601 56.0223 15.1754 55.5988 15.5988C55.1754 16.0223 54.601 16.2602 54.0021 16.2602Z"
                    fill="#090914"
                  />
                  <path
                    d="M57.6176 11.1981C58.0665 11.1981 58.4305 10.8341 58.4305 10.3852C58.4305 9.93621 58.0665 9.57227 57.6176 9.57227C57.1686 9.57227 56.8047 9.93621 56.8047 10.3852C56.8047 10.8341 57.1686 11.1981 57.6176 11.1981Z"
                    fill="#090914"
                  />
                </Link>


              </svg>
            </ul>
          </div>

          

          {/* <path d="M20 10.16c3.2 0 3.58 0 4.85.07a6.67 6.67 0 0 1 2.23.42 3.89 3.89 0 0 1 2.27 2.27 6.67 6.67 0 0 1 .42 2.23c.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85a6.67 6.67 0 0 1-.42 2.23 3.89 3.89 0 0 1-2.27 2.27 6.67 6.67 0 0 1-2.23.42c-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07a6.67 6.67 0 0 1-2.23-.42 3.89 3.89 0 0 1-2.27-2.27 6.67 6.67 0 0 1-.42-2.23c-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85a6.67 6.67 0 0 1 .42-2.23 3.89 3.89 0 0 1 2.27-2.27 6.67 6.67 0 0 1 2.23-.42c1.27-.06 1.65-.07 4.85-.07M20 8c-3.26 0-3.67 0-4.95.07a8.76 8.76 0 0 0-2.91.56 6.07 6.07 0 0 0-3.51 3.51 8.76 8.76 0 0 0-.56 2.91C8 16.33 8 16.74 8 20s0 3.67.07 4.95a8.76 8.76 0 0 0 .56 2.91 6.07 6.07 0 0 0 3.51 3.51 8.76 8.76 0 0 0 2.91.56c1.28.07 1.69.07 4.95.07s3.67 0 4.95-.07a8.76 8.76 0 0 0 2.91-.56 6.07 6.07 0 0 0 3.51-3.51 8.76 8.76 0 0 0 .56-2.86c.07-1.33.07-1.74.07-5s0-3.67-.07-4.95a8.76 8.76 0 0 0-.56-2.91 6.07 6.07 0 0 0-3.51-3.51A8.76 8.76 0 0 0 25 8.07C23.67 8 23.26 8 20 8Zm0 5.84A6.16 6.16 0 1 0 26.16 20 6.16 6.16 0 0 0 20 13.84ZM20 24a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z"></path> */}


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
              <h1 className=" text-black _font-rubik9">{FOOTER_LINKS.title}</h1>
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
