// "use client";
// import styles from "../app/ArrowButton.module.css";
// import Image from "next/image";
// import scrollToTop from "../public/script";

// export default function ArrowButton() {
//   return (
//     <div
//       id="scroll-to-top"
//       className="scrollToTop"
//       //   onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}
//       onClick={() => scrollToTop()}
//     >
//       <img src="/DBUU2.png" alt="Scroll to Top" />
//     </div>
//   );
// }















// "use client";
// import { useEffect, useState } from 'react';
// import styles from "../app/ArrowButton.module.css";// Import your CSS module file

// const BackToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsVisible(scrollTop > 800); // You can adjust the scroll threshold as needed
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className={`${styles.scrollup} ${isVisible ? styles.visible : ''}`}>
//       <a
//         title="Back to top"
        
//         className={`${styles.backToTopFancy} ${styles.noprint}`}
//         onClick={scrollToTop}
//       >
//         :: before "Top" :: after
//       </a>
     
//     </div>
//   );
// };

// export default BackToTopButton;





// // final code 
// "use client";
// import { useEffect, useState } from 'react';
// // import styles from "../app/ArrowButton.module.css";// Import your CSS module file
// import styles from '../app/ArrowButton.module.css';
// import { BsArrowUpCircle } from "react-icons/bs";


// const BackToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsVisible(scrollTop > 800); // You can adjust the scroll threshold as needed
//     };

//     window.addEventListener('scroll', handleScroll);

//     if(window.addEventListener('scroll',handleScroll)){

//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     //code if  'scrollup' hoga 'backtoTopFancy' se  then 'isvisible' bhi condition check karega true or false ki
//     <div className={`${styles.scrollup} ${isVisible ? styles.visible : ''}`}>
//       <button
//         className={`${styles.backToTopFancy} ${styles.noprint}`}
//         onClick={scrollToTop}
//       >
//          <BsArrowUpCircle className='w-16 h-16 font-black
//             rounded-full  transition ease-in-out delay-150' />
       
//       </button>
     
//     </div>
//   );
// };

// export default BackToTopButton;





//final code 
"use client";
import { useEffect, useState } from 'react';
import styles from "../app/ArrowButton.module.css";// Import your CSS module file
import { BsArrowUpCircle } from "react-icons/bs";
import Image from 'next/image'


const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 800); // You can adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    if(window.addEventListener('scroll',handleScroll)){

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    //code if  'scrollup' hoga 'backtoTopFancy' se  then 'isvisible' bhi condition check karega true or false ki
    <div className={`${styles.scrollup} ${isVisible ? styles.visible : ''}`}>
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
            height={81}/>
       
      </button>
     
    </div>
  );
};

export default BackToTopButton;

