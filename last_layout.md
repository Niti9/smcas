import Courses from "@/components/Courses";
import "./globals.css";
// import Footer from "@/components2/Footer";
// import Navbar from "@/components2/Navbar";

// import About from "@/components2/About";
// import Test from "@/components2/Test";
// import Contact from "@/components2/Contact";

// import Strategy from "@/components2/Strategy";
// import ProgramDetails from "@/components2/ProgramDetails";

import Hero from "@/components/Hero";
import CourseList from "@/components/CourseList";
import Navbar from "@/components/Navbar";
import Test from "@/components/Test";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Strategy from "@/components/Strategy";
import ProgramDetails from "@/components/ProgramDetails";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SMCAS",
  description: "Website for SMCAS",
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>

    /**This code is only for desktop version */
    // <html lang="en">
    //   <body>
    //     <Navbar />
    //     <main className="relative overflow-hidden  p-16 pl-24 pr-24">
    //       {children}
    //     </main>
    //     <Test/>
    //     <div className="relative overflow-hidden p-16 pl-24 pr-24">
    //       <About />
    //       <Strategy/>
    //       <ProgramDetails/>
    //       <Contact />
    //     </div>
    //     <Footer />
    //   </body>
    // </html>

    /**Mobile responsive code */
    <html lang="en">
      <body>
      <Navbar/>
      {/* {children} */}
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

          <div className="
         md:px-8 md:py-4 ">
          <CourseList />
          </div>

          <Test />
          <About />
          <Strategy/>
          {/* <ProgramDetails/> */}
          <Contact/>
        </div>
          <Footer/>
          
        {/* <div className="sm:m-4 p-1 w-full h-auto ">

        </div> */}
      </body>
    </html>
  );
}
