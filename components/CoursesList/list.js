
import React from "react";
import PopupButton from "../PopUpButton";
import Link from "next/link";


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
  

  return (
    <>
      <div
        className="w-full max-w-fit  border-0  sm:max-w-[356px]  sm:items-center 
      rounded-3xl   overflow-hidden h-full md:h-[750px] shrink-0 listContainer2"
      >
        <div className="flex-center flex-col gap-2.5">
          <div
            className="h-auto w-full lg:h-[123.255px] bg-gradient  p-6 
          flex flex-col justify-center items-center md:items-start text-center"
          >
            {/*title  */}
            <h1
              className="text-white w-full font-rubik font-feature-settings
             font-bold leading-8 text-3xl justify-center  align-middle text-center
              md:text-center"
            >
              {title}
            </h1>
            {/* description only if foundation batches*/}
            {desc && (
              <div
                className="pb-4 text-white text-sm w-full font-bold
                 text-center md:text-center "
              >
                {desc}
              </div>
            )}
          </div>

          {/* Border line */}
          <div className="border-0 courseBorder  " />
          {/* Inside of card and extra text */}
          <div className="flex-between mt-4 px-4 pb-4 h-[370px]">
            <div className="text-xl font-bold ">{text}</div>

            {/* Text Section */}
            <div className="text-lg text-[#2C3131] font-rubik font-normal leading-7 ">
              <div className="flex flex-col font-[10px]">
                <li>{links1}</li>
              </div>
              <div className="flex flex-col">
                <li>{links2}</li>
              </div>
              <div className="flex flex-col">
                <li>{links3}</li>
              </div>
              <div className="flex flex-col">
                <li>{links4}</li>
              </div>
              <div className="flex flex-col">
                <li>{links5}</li>
              </div>
              <div className="flex flex-col">
                <li>{links6}</li>
              </div>
              <div className="flex flex-col">
                <li>{links7}</li>
              </div>
            </div>
          </div>

          {/* Buttons section */}
          <div className=" flex flex-col gap-4  mt-8 mx-4 sm:mx-0 sm:mt-0 p-8">
            {/* Learn More button */}
            <div className="flexCenter  justify-center items-center gap-3">
              <PopupButton id={id} />
            </div>
            {/* Enroll now button */}
            <div className="flexCenter  justify-center items-center gap-3">
              <Link href="https://wa.me/+918605954303">
                <button
                  type="button"
                  title="Enroll Now"
                  className=" inline-flex px-6 py-6 justify-center
               items-center gap-1 border-1 rounded-full bg-[#FF8112]
               text-[#FFF] text-center font-feature-settings font-rubik
               text-lg sm:text-xl font-normal leading-6"
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
