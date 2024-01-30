import { FOOTER_LINKS } from "@/constants";
import React from "react";
import Link from "next/link";

export const Foot2 = () => {
  return (
    <>
      <ul
        className="flex flex-col gap32 mr-[6rem] lg:mr-32 text-black 
        font-feature-settings font-rubik text-[16px] z-50"
      >
        <Link
          href="/"
          className="flex gap-4 md:flex-col  m-1 lg:flex-row  
        "
        >
          <p className="whitespace-nowrap">{FOOTER_LINKS.label}</p>
        </Link>

        <div className="group inline-block  ">
          <button className=" rounded-3xl flex items-center min-w-32">
            <Link
              style={{ scrollBehavior: "smooth" }}
              className="flex  gap-4 md:flex-col  m-1 lg:flex-row "
              href="#PrelimsTest"
              scroll
            >
              {FOOTER_LINKS.link1}
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
            className=" border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 
                  ease-in-out origin-top min-w-32"
          >
            <li className="rounded-sm relative px-3 py-1 !hover:bg-black">
              <Link className="pr-1 font-normal  flex-1" href="#PrelimsTest">
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

        <div className="group inline-block text-black">
          <button className=" text-primary    rounded-3xl flex items-center min-w-32">
            <Link
              href="#courses"
              className="flex-row gap-4 md:flex-col  m-1 lg:flex-row"
            >
              <p className="whitespace-nowrap ">
                {FOOTER_LINKS.link2}
                <span>
                  <svg
                    className="fill-current inline h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                  </svg>
                </span>
              </p>
            </Link>
          </button>

          <ul
            className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 
                  ease-in-out origin-top min-w-32"
          >
            <li className="rounded-sm relative px-3 py-1 hover:bg-black">
              <button className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">python</span>
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

              <Link className="pr-1 font-medium flex-1" href="#courses">
                <ul className="bg-white border rounded-sm absolute top-0 right-0  transition duration-150 ease-in-out origin-top-left min-w-32">
                  <li className="px-3 py-1 hover:bg-gray-100">
                    Foundation Batch
                  </li>
                </ul>
              </Link>
            </li>
          </ul>
        </div>

        <Link href="#about" className="flex gap-4 md:flex-col  m-1 lg:flex-row">
          <p className="whitespace-nowrap">{FOOTER_LINKS.label2}</p>
        </Link>
        <Link
          href="#contact"
          className="flex gap-4 md:flex-col  m-1 lg:flex-row"
        >
          <p className="whitespace-nowrap">{FOOTER_LINKS.label3}</p>
        </Link>
      </ul>
    </>
  );
};
