import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import  page  from "./page";

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
      <main>

  {children}
       

        </main>
          <Footer/>
      </body>
    </html>
  );
}
