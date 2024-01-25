
"use client";
import { useEffect, useState } from "react";
import styles from "../app/ArrowButton.module.css"; // Import your CSS module file
import Image from "next/image";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 800); // You can adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    if (window.addEventListener("scroll", handleScroll)) {
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    //code if  'scrollup' hoga 'backtoTopFancy' se  then 'isvisible' bhi condition check karega true or false ki
    // <div className={`${styles.scrollup} ${isVisible ? styles.visible : ''}`}>
    // or
    <div
      className={`fixed  bottom-16 right-6 md:bottom-16 md:right-18 lg:right-20 opacity-70 cursor-pointer ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <button
        className={`${styles.backToTopFancy} ${styles.noprint}`}
        onClick={scrollToTop}
      >
        {/* <BsArrowUpCircle className='w-16 h-16 font-black
            rounded-full  transition ease-in-out delay-150' /> */}
        <Image
          src="/StickyArrow.svg"
          alt="stickyArrow"
          width={81}
          height={81}
          className="w-14   md:w-[80px]"
        />
      </button>
    </div>
  );
};

export default BackToTopButton;
