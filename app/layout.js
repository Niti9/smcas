
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import  page  from "./page";

export const metadata = {
  title: "SMCAS",
  description: "Website for SMCAS",
  // other:{
  //   'theme-color':'#0d1117',
  //   'og:url':'smcas.in',
  //   'og:image':'https://i.ibb.co/VvdvfwS/SMCAS-01-1-3.png',
  //   'twitter:image':'https://i.ibb.co/VvdvfwS/SMCAS-01-1-3.png',
  //   'twitter:card':'summary_large_image',
  //   'og:type':'website',
  //   'og:description':'SMCAS Provide complete guidance to the students preparing for the civil services examination. '

  // }

  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
