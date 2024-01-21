
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import  page  from "./page";

export const metadata = {
  title: "SMCAS",
  description: "Website for SMCAS",
  other:{
    'theme-color':'#0d1117',
    'color-scheme':'dark only',
    'og:url':'smcas.in',
    'og:image':'https://ibb.co/BPtrvwD',
    'twitter:image':'https://ibb.co/WcQcmVy',
    'twitter:card':'summary_large_image',
    'og:type':'website',
    'og:description':'SMCAS Provide complete guidance to the students preparing for the civil services examination. '

  }
};

export default function RootLayout({ children }) {
  return (
    /**Mobile responsive code */
    // 'https://i.ibb.co/BPtrvwD/Untitled-design-2.png',
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
