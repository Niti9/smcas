import React from "react";
import { List } from "./CoursesList/list";
import { Data } from "@/constants/data";

const CourseList = () => {
  return (
    <section className="flex-center w-full  flex-col mt-4 sm:mt-0">
      <div
        className=" flex w-full flex-wrap justify-center 
    gap-16 px-3 sm:px-0"
      >
        {Data.map((link) => (
          <List
            key={link.id}
            id={link.id}
            title={link.title}
            links1={link.p1}
            links2={link.p2}
            links3={link.p3}
            links4={link.p4}
            links5={link.p5}
            links6={link.p6}
            links7={link.p7}
            links8={link.p8}
            text={link.text}
            desc={link.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CourseList;
