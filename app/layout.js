import Courses from "@/components/Courses";
import "./globals.css";

import Hero from "@/components/Hero";
import CourseList from "@/components/CourseList";
import Navbar from "@/components/Navbar";
import Test from "@/components/Test";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Strategy from "@/components/Strategy";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SMCAS",
  description: "Website for SMCAS",
};

export default function RootLayout({ children }) {
  return (
    

    /**Mobile responsive code */
    <html lang="en">
      <body>
      <Navbar/>
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
          <Contact/>
        </div>
          <Footer/>
      </body>
    </html>
  );
}
