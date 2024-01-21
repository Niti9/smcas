import React from "react";

import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import CourseList from "@/components/CourseList";

import Test from "@/components/Test";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Strategy from "@/components/Strategy";

const page = () => {
  return (
    <>
      <main
        className="relative overflow-hidden  
      p-[1.5rem]
      md:pl-20 md:pr-20 md:pt-20 xl:pl-20
       "
      >
        <Hero />
        <Courses />
      </main>

      <div className="relative overflow-hidden ">
        <div
          className="
         md:px-8 md:py-4 "
        >
          <CourseList />
        </div>

        <Test  />
        <About />
        <Strategy />
        <Contact />

      </div>
    </>
  );
};

export default page;
