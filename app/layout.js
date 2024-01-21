
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import  page  from "./page";

export const metadata = {
  title: "SMCAS",
  description: "Website for SMCAS",
  other:{
    'theme-color':'#0d1117',
    'og:url':'smcas.in',
    'og:image':'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
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
