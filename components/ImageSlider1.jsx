"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";



const ImageSlider1 = ({ slides, interval  }) => {
 const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="relative w-full  ">
      {slides.map((slide, index) => (
        <div
          key={index}
          id={slide.id} // Dynamic ID
          className={index === currentIndex ? "block" : "hidden"}
        >
          {
            slide.id === "slide1" && (
              <div className="relative w-full    ">
                <Image
                  src={slide.image}
                  alt="Dynamic Content"
                  width={1800}
                  height={224}
                  // layout="fill"
                  className={slide.className} // Dynamic class name
                />
               

                <div
                  className="absolute inset-0 flex 
                  items-center justify-center">
                  <div
                    className="text-center text-[#FFFFFF] 
                    lg:pt-20 xl:pl-52 xl:pr-52 xl:pt-[500px] 
                    xl:pb-[342px] ">
                    <h1
                      className="  text-[18px] mt-4  
                       px-4 leading-normal font-bold 
                      sm:text-[36px] md:text-[36px]
                       lg:text-[56px] md:font-bold
                      lg:leading-[66px] xl:text-[60px]
                       font-feature-settings font-rubik  ">
                      UPSC/MPSC/Foundation Integrated Coaching centre
                    </h1>
                    <p
                      className="text-[8px]  px-2  sm:px-4
                      md:px-12  md:text-[16px] lg:text-[20px]
                      xl:pl-0 xl:pr-0 xl:text-[28px]">
                      UPSC Program inauguration at Indira Institute of Business
                      Management
                    </p>

                    <div
                      className="flexCenter  justify-center 
                      items-center  text-[12px] pt-1 md:pt-0
                      md:text-[14px] md:p-2 md:font-normal 
                      lg:text-[24px]  xl:text-[28px]"
                      id="Test" >
                      {/* Enroll now button */}
                      <Link href="https://wa.me/+918605954303">
                        <button
                          type="button"
                          title="Enroll Now"
                          className=" py-2 px-3 sm:p-4 lg:mt-4 
                          lg:px-6 lg:py-6  font-feature-settings
                           font-rubik  bg-[#FF8112]
                            text-white border rounded-full 
                          border-[#FF8112] ">
                          Enroll Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )

           
          }

          {/* smcas landing page  */}
          {slide.id==="slide2" && 
          <div className="relative w-full  px-2 justify-center   ">
          <Image
            src={slide.image}
            alt="smcasLandingPage"
            width={1800}
            height={2100}
            // layout="fill"
            className={slide.className} // Dynamic class name
          />
          {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <p className="text-white text-center">{slide.text}</p>
          </div> */}
        </div>
        }
        </div>
      ))}
    </div>
  );
};

export default ImageSlider1;
