import About from "@/components/About";
import Button from "@/components/Button";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[#121212]">
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}
