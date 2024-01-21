
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import  page  from "./page";

export const metadata = {
  title: "SMCAS",
  description: "SMCAS Provide complete guidance to the students preparing for the civil services examination.",
  other:{
    'theme-color':'#0d1117',
    'og:url':'https://smcas.in',
    'og:image':'https://i.ibb.co/VvdvfwS/SMCAS-01-1-3.png',
    'twitter:image':'https://i.ibb.co/VvdvfwS/SMCAS-01-1-3.png',
    'twitter:card':'summary_large_image',
    'og:type':'website',

  }

  
};

export default function RootLayout({ children }) {
  return (
    /**Mobile responsive code */
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
