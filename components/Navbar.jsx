// import { NAV_LINKS } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import Button from "./Button";

// const Navbar = () => {
//     return (
//         <>
//         {/* semantic nav tags */}
//         <nav className="flexBetween max-container
//         padding-container relative z-30 py-5">
//             <Link href="/">
//                 <Image
//                 src="/hilink-logo.svg"
//                 alt="logo"
//                 width={74}
//                 height={29}
//                 />
//             </Link>

//             {/* for desktop size */}
//             <ul className="hidden h-full gap-12 lg:flex">
//                 {NAV_LINKS.map((link)=>(
//                     <Link href = {link.href} key={link.key}
//                     className="regular-16 text-gray-50 flexCenter
//                     cursor-pointer pb-1.5 transition-all hover:font-bold">
//                         {link.label}
//                     </Link>
//                 ))}
//             </ul>

//             {/* for mobile screen */}
//             <div className="lg:flexCenter hidden">
//                 <Button
//                 type="button"
//                 title="Call Us :+7206246045"
//                 icon="/user.svg"
//                 // variant is css class
//                 variant="btn_dark_green"
//                 />
//             </div>

//             {/* for mobile we use menu button  */}
//             <Image
//             src="menu.svg"
//             alt="menu"
//             width={32}
//             height={32}
//             className="inline-block cursor-pointer lg:hidden"
//             />

//         </nav>
//         </>
//     )
// }

// export default Navbar;

/** try to change position of elements 
 * perfect but need to change some element
// */
// import { NAV_LINKS } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import Button from "./Button";

// const Navbar = () => {
//     return (
//         <>
//         {/*sticky class for navbar*/}
//         <section className="sticky top-0 left-0 right-0 z-50 bg-white">
//         <nav className="flexBetween max-container
//         padding-container relative z-30 py-5">
//             <Link href="/">
//                 <Image
//                 src="/hilink-logo.svg"
//                 alt="logo"
//                 width={74}
//                 height={29}
//                 />
//             </Link>

//             {/* for desktop size */}
//             <ul className="hidden h-full  pr-64 lg:flex">

//                 {NAV_LINKS.map((link)=>(
//                     <Link href = {link.href} key={link.key}
//                     className="regular-16 text-gray-50 flexCenter
//                     cursor-pointer pb-1.5 transition-all hover:font-bold">
//                         {link.label}
//                     </Link>
//                 ))}
//             </ul>

//             {/* for mobile screen */}
//             <div className="lg:flexCenter  hidden">
//                 <Button
//                 type="button"
//                 title="Call Us :+7206246045"
//                 icon="/user.svg"
//                 // variant is css class
//                 variant="btn_dark_green"
//                 />
//             </div>

//             {/* for mobile we use menu button  */}
//             <Image
//             src="menu.svg"
//             alt="menu"
//             width={32}
//             height={32}
//             className="inline-block cursor-pointer lg:hidden"
//             />

//         </nav>

//         </section>
//         </>
//     )
// }

// export default Navbar;

/** to make the changes for such some button */
// import { NAV_LINKS } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import Button from "./Button";

// const Navbar = () => {
//   return (
//     <>
//       {/*sticky class for navbar*/}
//       <section className="sticky top-0 left-0 right-0 z-50 bg-white">
//         <nav
//           className="flexBetween max-container
//         padding-container relative z-30 py-5"
//         >
//           <Link href="/">
//             <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
//           </Link>

//           {/* for desktop size */}
//           <ul className="hidden h-full gap-12 pr-64 lg:flex">
//             <div className="group inline-block text-black">
//               {NAV_LINKS.map((link) => (
//                 <Link
//                   href={link.href}
//                   key={link.key}
//                   className="regular-16 text-gray-50 flexCenter
//                     cursor-pointer pb-1.5 transition-all hover:font-bold"
//                 >
//                   {link.label}

//                   <span>
//                     <svg
//                       className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
//                     </svg>
//                   </span>

//                   <ul
//                     className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150
//                                     ease-in-out origin-top min-w-32"
//                   >
//                     <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
//                       <button className="w-full text-left flex items-center outline-none focus:outline-none">
//                         <span className="pr-1 flex-1">python</span>
//                         <span className="mr-auto">
//                           <svg
//                             className="fill-current h-4 w-4 transition duration-150 ease-in-out"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                           >
//                             <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
//                           </svg>
//                         </span>
//                       </button>
//                     </li>

//                     <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
//                       <button className="w-full text-left flex items-center outline-none focus:outline-none">
//                         <span className="pr-1 flex-1">python</span>
//                         <span className="mr-auto">
//                           <svg
//                             className="fill-current h-4 w-4 transition duration-150 ease-in-out"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                           >
//                             <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
//                           </svg>
//                         </span>
//                       </button>
//                     </li>
//                   </ul>
//                 </Link>
//               ))}
//             </div>
//           </ul>

//           {/* for mobile screen */}
//           <div className="lg:flexCenter  hidden">
//             <Button
//               type="button"
//               title="Call Us :+7206246045"
//               icon="/user.svg"
//               // variant is css class
//               variant="btn_dark_green"
//             />
//           </div>

//           {/* for mobile we use menu button  */}
//           <Image
//             src="menu.svg"
//             alt="menu"
//             width={32}
//             height={32}
//             className="inline-block cursor-pointer lg:hidden"
//           />
//         </nav>
//       </section>
//     </>
//   );
// };

// export default Navbar;

/** raman code */
// import { NAV_LINKS } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import Button from "./Button";

// const Navbar = () => {
//   return (
//     <>
//       {/*sticky class for navbar*/}
//       <section className="sticky top-0 left-0 right-0 z-50 bg-white">
//         <header className="container mx-auto px-5 flex justify-around items-center pl-32">
//           <Link href="/">
//             <Image className='w-40 h-20 py-4' src="/hilink-logo.svg" alt="logo" width={74} height={29} />
//           </Link>

//           <div
//             className="-right-full transition-all duration-300 mt-[56px] lg:mt-0
//              bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto
//              justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center"
//           >

//             <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row
//              gap-x-2 font-semibold pr-12">
//               {/* for desktop size */}

//               <div className="group inline-block text-black">

//                 <button className=" text-orange-500 bg-white outline-none focus:outline-none px-3 py-1  rounded-3xl flex items-center min-w-32">
//                   <Link className="pr-1 font-semibold flex-1" href="/"
//                   >Home</Link>
//                 </button>

//               </div>

//               <div className="group inline-block text-black">

//                 <button className="hover:bg-orange-500 text-primary hover:text-white outline-none focus:outline-none px-3 py-1 bg-white rounded-3xl flex items-center min-w-32">
//                   <Link className="pr-1 font-semibold flex-1" href="/"
//                   >Test Series</Link>

//                   <span>
//                     <svg
//                       className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
//                     </svg>
//                   </span>
//                 </button>

//                 <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150
//                   ease-in-out origin-top min-w-32">
//                   <li className="rounded-sm relative px-3 py-1 hover:bg-black">
//                     <button className="w-full text-left flex items-center outline-none focus:outline-none">
//                       <span className="pr-1 flex-1">python</span>
//                       <span className="mr-auto">
//                         <svg
//                           className="fill-current h-4 w-4 transition duration-150 ease-in-out"
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
//                         </svg>
//                       </span>
//                     </button>

//                     <ul className="bg-white border rounded-sm absolute top-0 right-0
//                     transition duration-150 ease-in-out origin-top-left min-w-32">

//                       <li className="px-3 py-1 hover:bg-gray-100">
//                         <Link className="pr-1 font-semibold flex-1"
//                           href="/">
//                           Python
//                         </Link>

//                       </li>
//                     </ul>

//                   </li>

//                   <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
//                     <button className="w-full text-left flex items-center outline-none focus:outline-none">
//                       <span className="pr-1 flex-1">full stack</span>
//                       <span className="mr-auto">
//                         <svg
//                           className="fill-current h-4 w-4 transition duration-150 ease-in-out"
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
//                         </svg>
//                       </span>
//                     </button>

//                     <ul className="bg-white border rounded-sm absolute top-0 right-0  transition duration-150 ease-in-out origin-top-left min-w-32">
//                       <li className="px-3 py-1 hover:bg-gray-100">
//                         <Link className="pr-1 font-semibold flex-1"
//                           href="/">Full Stack web Dev</Link>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>

//               </div>

//               <div className="group inline-block text-black">
//                 <button
//                   className="hover:bg-primary text-primary
//                    hover:text-white outline-none focus:outline-none px-3 py-1 hover:bg-orange-500 rounded-3xl flex items-center min-w-32">
//                   <Link className="pr-1 font-semibold flex-1"
//                     href="/">
//                     Class Program
//                   </Link>
//                 </button>

//               </div>

//               <div className="group inline-block text-black">
//                 <button
//                   className="hover:bg-primary text-primary hover:text-white outline-none focus:outline-none px-3 py-1 hover:bg-orange-500 rounded-3xl flex items-center min-w-32">
//                   <Link className="pr-1 font-semibold flex-1"
//                     href="/">
//                     About Us
//                   </Link>
//                 </button>

//               </div>

//               <div className="group inline-block text-black">
//                 <button
//                   className="hover:bg-primary text-primary hover:text-white outline-none focus:outline-none px-3 py-1 hover:bg-orange-500 rounded-3xl flex items-center min-w-32">
//                   <Link className="pr-1 font-semibold flex-1"
//                     href="/">
//                     Contact Us
//                   </Link>
//                 </button>

//               </div>

//               {/* for mobile screen */}
//               <div className="lg:flexCenter  hidden">
//                 <Button
//                   type="button"
//                   title="Call Us :+7206246045"
//                   icon="/user.svg"
//                   // variant is css class
//                   variant="btn_dark_green"
//                 />
//               </div>

//               {/* for mobile we use menu button  */}
//               <Image
//                 src="menu.svg"
//                 alt="menu"
//                 width={32}
//                 height={32}
//                 className="inline-block cursor-pointer lg:hidden"
//               />

//             </ul>
//           </div>

//         </header>
//       </section>
//     </>
//   );
// };

// export default Navbar;

/** My final and original code  */

// import Image from "next/image";
// import Link from "next/link";
// import Button from "./Button";
// import Nav2 from "./Nav2";

// const Navbar = () => {
//   return (
//     <>
//       {/*sticky class for navbar*/}
//       <section className="sticky top-0 left-0 right-0 z-50 bg-white">
//         <nav
//           className="flexBetween max-container
//         padding-container relative z-30 py-5 "
//         >
//           <Link href="/">
//             <Image src="/SMCAS.png" alt="logo" width={74} height={29} />
//           </Link>

//           {/* for desktop size */}
//           <ul className="hidden h-full  pr-64 lg:flex ">
//             <Nav2 />
//           </ul>

//           {/* for mobile screen */}
//           <div className="lg:flexCenter  hidden">
//             <Link href="https://wa.me/+7206246045" >
//               <Button
//                 type="button"
//                 title="Call Us :+7206246045"
//                 icon="/user.svg"
//                 // variant is css class
//                 variant="btn_Call"

//               ></Button>
//             </Link>
//           </div>

//           {/* for mobile we use menu button  */}
//           <Image
//             src="menu.svg"
//             alt="menu"
//             width={32}
//             height={32}
//             className="inline-block cursor-pointer lg:hidden"
//           />
//         </nav>

//         <div className="navLine" />
//         {/* <p className="regular-14 w-full  mb-4 text-center text-gray-700"></p> */}
//       </section>
//     </>
//   );
// };

// export default Navbar;

/** perfect code  */

// import Image from "next/image";
// import Link from "next/link";
// import Nav2 from "./Nav2";

// const Navbar = () => {
//     return (
//         <>
//         {/*sticky class for navbar*/}
//         <section
//          className="sticky top-0 left-0 right-0 z-50 bg-white"
//          >
//         <nav className="flexBetween max-container
//         padding-container relative z-30 py-5 ">
//             <Link href="/" >
//                 <Image
//                 src="/SMCAS.png"
//                 alt="logo"
//                 width={74}
//                 height={29}
//                 className="logo"
//                 priority={true}
//                 />
//             </Link>

//             {/* for desktop size */}
//             <ul className="hidden h-full  pr-64 lg:flex">
//                 <Nav2/>

//             </ul>

//             {/* for mobile screen */}
//             <div className="

//             lg:flexCenter  hidden  ">
//                 <Link  href="https://wa.me/+918605954303">

//             <button type="button"
//               title="Enroll Now"

//                className="listButton2"
//                 >
//                   Enroll Now
//               <p >
//                <svg className=" inline "width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <g id="call">
//               <path id="Vector" d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
//               </g>
//               </svg>

//               </p>
//             </button>
//                 </Link>
//             </div>

//             {/* for mobile we use menu button  */}
//             <Image
//             src="menu.svg"
//             alt="menu"
//             width={32}
//             height={32}
//             className="inline-block cursor-pointer lg:hidden"
//             />

//         </nav>

//         <div className="border  bg-white" />
//         {/* <p className="regular-14 w-full  mb-4 text-center text-gray-700"></p> */}
//         </section>

//         </>
//     )
// }

// export default Navbar;

/** This code required mobile responsiveness */

// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Nav2 from './Nav2';

// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <section className="sticky top-0 left-0 right-0 z-50 bg-white">
//         <nav className="flexBetween max-container padding-container relative z-30 py-5">
//           <Link href="/">
//             <Image
//               src="/SMCAS.png"
//               alt="logo"
//               width={74}
//               height={29}
//               className="logo"
//               priority={true}
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <ul className="hidden lg:flex">
//             <Nav2/>
//           </ul>

//           {/* Mobile Navigation */}
//           <div className="lg:flexCenter hidden">
//             <Link href="https://wa.me/+918605954303">
//               <button type="button" title="Enroll Now" className="listButton2">
//                 Enroll Now
//                 <p>
//                   <svg
//                     className="inline"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g id="call">
//                       <path
//                         id="Vector"
//                         d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
//                         stroke="white"
//                         strokeWidth="1.5"
//                         strokeLinejoin="round"
//                       />
//                     </g>
//                   </svg>
//                 </p>
//               </button>
//             </Link>
//           </div>

//           {/* Mobile Menu Icon */}
//           <Image
//             src="menu.svg"
//             alt="menu"
//             width={32}
//             height={32}
//             onClick={toggleMobileMenu}
//             className="inline-block cursor-pointer lg:hidden"
//           />
//         </nav>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden absolute top-0 left-0 w-full h-full bg-gray-800 flex items-center justify-center">
//             <ul className="text-white text-center">
//               <li className="py-4">
//                 <Link href="/">Home</Link>
//               </li>
//               <li className="py-4">
//                 <Link href="/about">About</Link>
//               </li>
//               <li className="py-4">
//                 <Link href="/services">Services</Link>
//               </li>
//               <li className="py-4">
//                 <Link href="/contact">Contact</Link>
//               </li>
//               <li className="py-4">
//                 <Link href="/blog">Blog</Link>
//               </li>
//             </ul>
//           </div>
//         )}

//         <div className="border bg-white" />
//       </section>
//     </>
//   );
// };

// export default Navbar;

"use client";
import Image from "next/image";
import Link from "next/link";
import Nav2 from "./Nav2";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <section className="sticky top-0 left-0 right-0 z-50 bg-white">
        <nav
          className="w-full h-auto text-black bg-white
flexBetween px-8 md:px-4 xl:pl-[4rem] xl:pr-[4rem]
z-30 py-5
"
        >
          <div className="md:w-[200px] lg:min-w-[74px] lg:max-w-[200px] xl:w-[210px]">
            <Link href="/">
              <Image
                src="/SMCAS.png"
                alt="logo"
                width={74}
                height={29}
                className="logo"
                priority={true}
              />
            </Link>
          </div>

          <ul
            className="hidden lg:text-sm xl:text-base  font-rubik font-feature-settings
         w-full h-auto   lg:flex 
            "
          >
            {/* HOME starts here */}
            <div className=" cursor-pointer">
              <button
                className="bg-white text-[#FF9D3E] outline-none
                    focus:outline-none px-3 py-1  rounded-3xl flex items-center
                    min-w-32  "
              >
                <Link className="pr-1 font-semibold flex-1" href="/">
                  Home
                </Link>
              </button>
            </div>

            {/* Test Series */}
            <ul className="cursor-pointer">
              <li className="group inline-block">
                <button
                  className="hover:bg-orange-500
          hover:text-white outline-none
           focus:outline-none px-3 py-1 bg-white
            rounded-3xl flex items-center min-w-32 
            font-rubik text-[#717171] text-base font-medium leading-normal "
                >
                  <Link className="pr-1 flex-1" href="#PrelimsTest">
                    Test Series
                  </Link>

                  <span>
                    <svg
                      className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-[600ms] ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                    </svg>
                  </span>
                </button>

                <ul
                  className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 
                  ease-in-out origin-top min-w-32"
                >
                  <li className="rounded-sm relative ">
                    <Link
                      className="pr-1 font-medium flex-1"
                      href="#PrelimsTest"
                    >
                      <ul
                        className="bg-white border  rounded-sm absolute top-0 right-0  
                    transition duration-150 ease-in-out origin-top-left min-w-32"
                      >
                        <li className="px-3 py-1 hover:bg-gray-100 ">
                          Prelims Test Series
                        </li>
                      </ul>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Class Program */}
            <ul className=" cursor-pointer">
              <li className="group inline-block">
                <button
                  className="hover:bg-orange-500
          hover:text-white outline-none
           focus:outline-none px-3 py-1 bg-white
            rounded-3xl flex items-center min-w-32 
            font-rubik text-[#717171] text-base font-medium leading-normal "
                >
                  <Link className="pr-1 flex-1" href="#courses">
                    Class Program
                  </Link>

                  <span>
                    <svg
                      className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-[600ms] ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                    </svg>
                  </span>
                </button>
                <ul
                  className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 
                  ease-in-out origin-top min-w-32"
                >
                  <li className="rounded-sm relative px-3 py-1 hover:bg-black">
                    <button className="w-full text-left flex items-center outline-none focus:outline-none">
                      <span className="pr-10 flex-1">python</span>
                      <span className="mr-auto">
                        <svg
                          className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                        </svg>
                      </span>
                    </button>

                    <Link
                      className="pr-[7.67rem] font-medium flex-1"
                      href="#courses"
                    >
                      <ul
                        className="bg-white border rounded-sm absolute top-0 right-0  
                    transition duration-150 ease-in-out origin-top-left min-w-32"
                      >
                        <li className="px-3 py-1 hover:bg-gray-100">
                          UPSC Integrated Batch
                        </li>
                      </ul>
                    </Link>
                  </li>

                  <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                    <button className="w-full text-left flex items-center outline-none focus:outline-none">
                      <span className="pr-1 flex-1">full stack</span>
                      <span className="mr-auto">
                        <svg
                          className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                        </svg>
                      </span>
                    </button>

                    <Link className="pr-1 font-medium flex-1" href="#courses">
                      <ul className="bg-white border rounded-sm absolute top-0 right-0  transition duration-150 ease-in-out origin-top-left min-w-32">
                        <li className="px-3 py-1 hover:bg-gray-100">
                          MPSC Integrated Batch
                        </li>
                      </ul>
                    </Link>
                  </li>

                  <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                    <button className="w-full text-left flex items-center outline-none focus:outline-none">
                      <span className="pr-1 flex-1">full stack</span>
                      <span className="mr-auto">
                        <svg
                          className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                        </svg>
                      </span>
                    </button>

                    <Link className="pr-1 font-medium flex-1 " href="#courses">
                      <ul className="bg-white border rounded-sm absolute top-0 right-0  transition duration-150 ease-in-out origin-top-left min-w-32">
                        <li className="px-3 py-1 hover:bg-gray-100">
                          Foundation Batch
                        </li>
                      </ul>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* About Us */}
            <li className=" cursor-pointer">
              <button
                className="text-[#717171] font-rubik
         text-base font-medium leading-normal
        hover:bg-primary text-primary
         hover:text-white outline-none focus:outline-none
          px-3 py-1 hover:bg-orange-500 rounded-3xl flex items-center min-w-32"
              >
                <Link className="pr-1  flex-1" href="#about">
                  About Us
                </Link>
              </button>
            </li>

            {/* Contact Us */}
            <li className=" cursor-pointer">
              <button
                className=" text-[#717171] font-rubik
        text-base font-medium leading-normal
         text-primary hover:text-white
          outline-none focus:outline-none px-3 py-1
           hover:bg-orange-500 rounded-3xl
            flex items-center min-w-32"
              >
                <Link className="pr-1 flex-1" href="#contact">
                  Contact Us
                </Link>
              </button>
            </li>
          </ul>

          {/* xl screen  */}
          <div
            className="lg:min-w-[12rem] lg:block 
           hidden"
          >
            <Link href="https://wa.me/+918605954303">
              <button type="button" title="Enroll Now" className="listButton2">
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

          <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            onClick={toggleMobileMenu}
            className="inline-block cursor-pointer lg:hidden"
          />

          {isMobileMenuOpen && (
            <div className=" lg:hidden right-0 font-rubik font-feature-settings  bg-blue-70 transition-all duration-300 mt-[108px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center">
              <ul className=" text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-medium ">
                <div className="group inline-block text-black">
                  <button className="hover:bg-primary text-primary  outline-none focus:outline-none px-3 py-1 bg-white rounded-3xl flex items-center min-w-32">
                    <Link
                      href="/"
                      className="pr-1 font-semibold flex-1"
                      onClick={toggleMobileMenu}
                    >
                      Home
                    </Link>
                  </button>
                </div>

                <div className="group inline-block text-black">
                  <button className="hover:bg-primary text-primary outline-none focus:outline-none px-3 py-1 bg-white rounded-3xl flex items-center min-w-32">
                    <Link
                      href="#PrelimsTest"
                      className="pr-1 font-semibold flex-1"
                    >
                      Test Series
                    </Link>
                    <span>
                      <svg
                        className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-[600ms] ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                      </svg>
                    </span>
                  </button>

                  <ul
                    className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 
                  ease-in-out origin-top min-w-32"
                  >
                    <li className="rounded-sm relative ">
                      <Link
                        className="pr-1 font-medium flex-1"
                        href="#PrelimsTest"
                        onClick={toggleMobileMenu}
                      >
                        <ul
                          className="bg-white border  rounded-sm absolute top-0 right-0  
                    transition duration-150 ease-in-out origin-top-left min-w-32"
                        >
                          <li className="px-3 py-1  ">Prelims Test Series</li>
                        </ul>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="group inline-block text-black">
                  <button className="hover:bg-primary text-primary  outline-none focus:outline-none px-3 py-1 bg-white rounded-3xl flex items-center min-w-32">
                    <Link href="#courses" className="pr-1 font-semibold flex-1">
                      Class Program
                    </Link>
                    <span>
                      <svg
                        className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-[600ms] ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                      </svg>
                    </span>
                  </button>
                  <ul
                    className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 
                  ease-in-out origin-top min-w-32"
                  >
                    <li className="rounded-sm relative px-3 py-1 hover:bg-black">
                      <button className="w-full text-left flex items-center outline-none focus:outline-none">
                        <span className="pr-10 flex-1">python</span>
                        <span className="mr-auto">
                          <svg
                            className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                          </svg>
                        </span>
                      </button>

                      <Link
                        className="pr-[7.67rem] font-medium flex-1"
                        href="#courses"
                        onClick={toggleMobileMenu}
                      >
                        <ul
                          className="bg-white border rounded-sm absolute top-0 right-0  
                    transition duration-150 ease-in-out origin-top-left min-w-32"
                        >
                          <li className="px-3 py-1 hover:bg-gray-100">
                            UPSC Integrated Batch
                          </li>
                        </ul>
                      </Link>
                    </li>

                    <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                      <button className="w-full text-left flex items-center outline-none focus:outline-none">
                        <span className="pr-1 flex-1">full stack</span>
                        <span className="mr-auto">
                          <svg
                            className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                          </svg>
                        </span>
                      </button>

                      <Link
                        className="pr-1 font-medium flex-1"
                        href="#courses"
                        onClick={toggleMobileMenu}
                      >
                        <ul className="bg-white border rounded-sm absolute top-0 right-0  transition duration-150 ease-in-out origin-top-left min-w-32">
                          <li className="px-3 py-1 hover:bg-gray-100">
                            MPSC Integrated Batch
                          </li>
                        </ul>
                      </Link>
                    </li>

                    <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                      <button className="w-full text-left flex items-center outline-none focus:outline-none">
                        <span className="pr-1 flex-1">full stack</span>
                        <span className="mr-auto">
                          <svg
                            className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                          </svg>
                        </span>
                      </button>

                      <Link
                        className="pr-1 font-medium flex-1 "
                        href="#courses"
                        onClick={toggleMobileMenu}
                      >
                        <ul className="bg-white border rounded-sm absolute top-0 right-0  transition duration-150 ease-in-out origin-top-left min-w-32">
                          <li className="px-3 py-1 hover:bg-gray-100">
                            Foundation Batch
                          </li>
                        </ul>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="group inline-block text-black">
                  <button className="hover:bg-primary text-primary  outline-none focus:outline-none px-3 py-1 bg-white rounded-3xl flex items-center min-w-32">
                    <Link
                      href="#about"
                      className="pr-1 font-semibold flex-1"
                      onClick={toggleMobileMenu}
                    >
                      About Us
                    </Link>
                  </button>
                </div>

                <div className="group inline-block text-black">
                  <button className="hover:bg-primary text-primary  outline-none focus:outline-none px-3 py-1 bg-white rounded-3xl flex items-center min-w-32">
                    <Link
                      href="#contact"
                      className="pr-1 font-semibold flex-1
                "
                      onClick={toggleMobileMenu}
                    >
                      Contact Us
                    </Link>
                  </button>
                </div>

                {/* Enroll Now */}
                <div className="group inline-block text-white ">
                  <button className="hover:bg-primary text-primary bg-orange-400 hover:text-white outline-none focus:outline-none px-3 py-2  rounded-full flex items-center min-w-32">
                    <Link
                      href="https://wa.me/+918605954303"
                      className="pr-1 font-semibold flex-1 py-4 "
                    >
                      Enroll Now
                    </Link>

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
                  </button>
                </div>
              </ul>
            </div>
          )}
        </nav>
        <div className="border  bg-white" />
      </section>
    </>
  );
};

export default Navbar;
