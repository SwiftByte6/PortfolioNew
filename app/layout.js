import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rohit | Full Stack Developer",
  description: "A developer portfolio showcasing modern frontend, robust backend, and seamless user experience across projects.",
  openGraph: {
    title: "Rohit | Full Stack Developer",
    description: "A developer portfolio showcasing modern frontend, robust backend, and seamless user experience across projects.",
    url: "https://rohitsoneji06.netlify.app",
    siteName: "Rohit Portfolio",
    images: [
      {
        url: "/favicon.ico", // Favicon as OpenGraph image
        width: 1200,
        height: 630,
        alt: "Rohit - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit | Full Stack Developer",
    description: "A developer portfolio showcasing modern frontend, robust backend, and seamless user experience across projects.",
    images: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <div className="bg-[#121212]">
          <Navbar/>
          {children}
          <Footer/>
         </div>
      </body>
    </html>
  );
}
