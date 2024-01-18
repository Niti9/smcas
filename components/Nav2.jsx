// "use client";
// import React from "react";
// import Link from "next/link";
// import { useEffect } from "react";
// import Test from "./Test";

// const Nav2 = () => {
//   return (
//     <>
//       <div className="group inline-block text-black ">
//         <button className=" text-orange-500 bg-white outline-none focus:outline-none px-3 py-1  rounded-3xl flex items-center min-w-32">
//           <Link className="pr-1 font-semibold flex-1" href="/">
//             Home
//           </Link>
//         </button>
//       </div>

//       <div className="group inline-block text-[#717171] ">
//         <button className="hover:bg-orange-500 text-[#717171]  hover:text-white outline-none focus:outline-none px-3 py-1 bg-white rounded-3xl flex items-center min-w-32">
//           <Link className="pr-1 font-semibold flex-1" href="#courses">
//             Test Series
//           </Link>

//           <span>
//             <svg
//               className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-[800ms] ease-in-out"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
//             </svg>
//           </span>
//         </button>

//         <ul
//           className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 
//                   ease-in-out origin-top min-w-32"
//         >
//           <li className="rounded-sm relative px-3 py-1 hover:bg-black">
//             <button className="w-full text-left flex items-center outline-none focus:outline-none">
//               <span className="pr-1 flex-1">python</span>
//               <span className="mr-auto">
//                 <svg
//                   className="fill-current h-4 w-4 transition duration-150 ease-in-out"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
//                 </svg>
//               </span>
//             </button>

//             <Link className="pr-1 font-semibold flex-1" href="#courses">
//               <ul
//                 className="bg-white border rounded-sm absolute top-0 right-0  
//                     transition duration-150 ease-in-out origin-top-left min-w-32"
//               >
//                 <li className="px-3 py-1 hover:bg-gray-100">
//                   UPSC Integrated Batch
//                 </li>
//               </ul>
//             </Link>
//           </li>

//           <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
//             <button className="w-full text-left flex items-center outline-none focus:outline-none">
//               <span className="pr-1 flex-1">full stack</span>
//               <span className="mr-auto">
//                 <svg
//                   className="fill-current h-4 w-4 transition duration-150 ease-in-out"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
//                 </svg>
//               </span>
//             </button>

//             <Link className="pr-1 font-semibold flex-1" href="#courses">
//               <ul className="bg-white border rounded-sm absolute top-0 right-0  transition duration-150 ease-in-out origin-top-left min-w-32">
//                 <li className="px-3 py-1 hover:bg-gray-100">
//                   MPSC Integrated Batch
//                 </li>
//               </ul>
//             </Link>
//           </li>

//           <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
//             <button className="w-full text-left flex items-center outline-none focus:outline-none">
//               <span className="pr-1 flex-1">full stack</span>
//               <span className="mr-auto">
//                 <svg
//                   className="fill-current h-4 w-4 transition duration-150 ease-in-out"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
//                 </svg>
//               </span>
//             </button>

//             <Link className="pr-1 font-semibold flex-1" href="#courses">
//               <ul className="bg-white border rounded-sm absolute top-0 right-0  transition duration-150 ease-in-out origin-top-left min-w-32">
//                 <li className="px-3 py-1 hover:bg-gray-100">
//                   Foundation Batch
//                 </li>
//               </ul>
//             </Link>
//           </li>
//         </ul>
//       </div>

//       <div className="group inline-block text-black">
//         <button className="hover:bg-orange-500 text-primary hover:text-white outline-none focus:outline-none px-3 py-1 bg-white rounded-3xl flex items-center min-w-32">
//           <Link className="pr-1 font-semibold flex-1" href="#class-program">
//             Class Program
//           </Link>

//           <span>
//             <svg
//               className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-[800ms] ease-in-out"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
//             </svg>
//           </span>
//         </button>

//         <ul
//           className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 
//                   ease-in-out origin-top min-w-32"
//         >
          
//           <li className="rounded-sm relative px-3 py-1 hover:bg-black">
//             <button className="w-full text-left flex items-center outline-none focus:outline-none">
//               <span className="pr-10 flex-1">python</span>
//               <span className="mr-auto">
//                 <svg
//                   className="fill-current h-4 w-4 transition duration-150 ease-in-out"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
//                 </svg>
//               </span>
//             </button>

//             <Link className="pr-[7.67rem] font-semibold flex-1" href="#class-program">
//             <ul
//               className="bg-white border rounded-sm absolute top-0 right-0  
//                     transition duration-150 ease-in-out origin-top-left min-w-32"
//             >
//               <li className="px-3 py-1 hover:bg-gray-100">
//                   UPSC Integrated Batch
//               </li>
//             </ul>
//                 </Link>
//           </li>
          

//           <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
//             <button className="w-full text-left flex items-center outline-none focus:outline-none">
//               <span className="pr-1 flex-1">full stack</span>
//               <span className="mr-auto">
//                 <svg
//                   className="fill-current h-4 w-4 transition duration-150 ease-in-out"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
//                 </svg>
//               </span>
//             </button>

//                 <Link className="pr-1 font-semibold flex-1" href="#class-program">
//             <ul className="bg-white border rounded-sm absolute top-0 right-0  transition duration-150 ease-in-out origin-top-left min-w-32">
//               <li className="px-3 py-1 hover:bg-gray-100">
//                   MPSC Integrated Batch
//               </li>
//             </ul>
//                 </Link>
//           </li>

//           <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
//             <button className="w-full text-left flex items-center outline-none focus:outline-none">
//               <span className="pr-1 flex-1">full stack</span>
//               <span className="mr-auto">
//                 <svg
//                   className="fill-current h-4 w-4 transition duration-150 ease-in-out"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
//                 </svg>
//               </span>
//             </button>

//                 <Link className="pr-1 font-semibold flex-1" href="#class-program">
//             <ul className="bg-white border rounded-sm absolute top-0 right-0  transition duration-150 ease-in-out origin-top-left min-w-32">
//               <li className="px-3 py-1 hover:bg-gray-100">
//                   Foundation Batch
//               </li>
//             </ul>
//                 </Link>
//           </li>
//         </ul>
//       </div>

//       <div className="group inline-block text-black">
//         <button className="hover:bg-primary text-primary hover:text-white outline-none focus:outline-none px-3 py-1 hover:bg-orange-500 rounded-3xl flex items-center min-w-32">
//           <Link className="pr-1 font-semibold flex-1" href="#about">
//             About Us
//           </Link>
//         </button>
//       </div>

//       <div className="group inline-block text-black">
//         <button className="hover:bg-primary text-primary hover:text-white outline-none focus:outline-none px-3 py-1 hover:bg-orange-500 rounded-3xl flex items-center min-w-32">
//           <Link className="pr-1 font-semibold flex-1" href="#contact">
//             Contact Us
//           </Link>
//         </button>
//       </div>
//     </>
//   );
// };

// export default Nav2;






/** final code  */
import React from "react";
import Link from "next/link";
import Test from "./Test";

const Nav2 = () => {
  return (
    <>
      <div className="group inline-block _font-rubik4 ">
        <button className="bg-white outline-none
         focus:outline-none px-3 py-1  rounded-3xl flex items-center
          min-w-32  ">
          <a className="pr-1 font-semibold flex-1" href="/">
            Home
          </a>
        </button>
      </div>

      

    


      <div className="group inline-block ">
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
            

            <Link className="pr-1 font-medium flex-1" href="#PrelimsTest">
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
      </div>

      <div className="group inline-block ">
        <button
          className="hover:bg-orange-500 
          hover:text-white outline-none
           focus:outline-none px-3 py-1 bg-white
            rounded-3xl flex items-center min-w-32 
            font-rubik text-[#717171] text-base font-medium leading-normal "
        >
          <a className="pr-1 flex-1" href="#courses">
            Class Program
          </a>

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

            <a
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
            </a>
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

            <a className="pr-1 font-medium flex-1 bg-red-500" href="#courses">
              <ul className="bg-white border rounded-sm absolute top-0 right-0  transition duration-150 ease-in-out origin-top-left min-w-32">
                <li className="px-3 py-1 hover:bg-gray-100">
                  MPSC Integrated Batch
                </li>
              </ul>
            </a>
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

            <a className="pr-1 flex-1 " href="#courses">
              <ul className="bg-white border rounded-sm absolute top-0 right-0  transition duration-150 ease-in-out origin-top-left min-w-32">
                <li className="px-3 py-1 hover:bg-gray-100">
                  Foundation Batch
                </li>
              </ul>
            </a>
          </li>
        </ul>
      </div>


      <div className="group inline-block text-black">
        <button
          className="text-[#717171] font-rubik
         text-base font-medium leading-normal
        hover:bg-primary text-primary
         hover:text-white outline-none focus:outline-none
          px-3 py-1 hover:bg-orange-500 rounded-3xl flex items-center min-w-32"
        >
          <a className="pr-1  flex-1" href="#about">
            About Us
          </a>
        </button>
      </div>

      <div className="group inline-block text-black">
        <button
          className=" text-[#717171] font-rubik
        text-base font-medium leading-normal
         text-primary hover:text-white
          outline-none focus:outline-none px-3 py-1
           hover:bg-orange-500 rounded-3xl
            flex items-center min-w-32"
        >
          <a className="pr-1 flex-1" href="#contact">
            Contact Us
          </a>
        </button>
      </div>
    </>
  );
};

export default Nav2;
