'use client'
import React, { useEffect, useState } from 'react'
import { FaHome, FaUser, FaCode } from "react-icons/fa";
import { IoCall, IoReorderThreeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { easeIn, motion } from 'framer-motion';
import { FaMoon } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const triggerHeight = window.innerHeight * 0.05;
            const shouldScroll = window.scrollY > triggerHeight;
            if (scrolled !== shouldScroll) {
                setScrolled(shouldScroll);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [scrolled]);

    const NavList = [
        { heading: "Home", icons: <FaHome />, id: "home" },
        { heading: "About", icons: <FaUser />, id: "about" },
        { heading: "Projects", icons: <FaCode size={25} />, id: "projects" },
        { heading: "Contact", icons: <IoCall />, id: "contact" }
    ];

    return (
        <motion.nav 
        initial={{y:-100,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.7,ease:easeIn}}

        className='fixed w-full mx-auto z-50'>
            <div className={`${scrolled ? "w-[90%] md:w-[50%] bg-white/7 backdrop-blur-2xl md:px-10 " : "md:w-[95%] w-full"} mx-auto p-3 py-6 border-b border-white transition-all duration-500 ease-in flex justify-between items-center`}>
                <div className='font-bold text-2xl'>Rohit</div>
                
                <ul className='md:flex hidden gap-10 text-xl'>
                    {NavList.map((item, index) => (
                        <li key={index} className='flex items-center gap-2 cursor-pointer'>
                            <a href={`#${item.id}`} className='flex items-center gap-2'>
                                {item.icons}
                                <span>{scrolled ? "" : item.heading}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='hidden md:flex gap-3'>
                    <div className='w-[40px] h-[40px] border border-white rounded-full flex justify-center items-center'><FaMoon className='text-white text-2xl'/></div>
                    <div className='w-[40px] h-[40px] border border-white rounded-full flex justify-center items-center'><IoMdMail className='text-white text-2xl'/></div>

                </div>

                <div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoMdClose size={40} /> : <IoReorderThreeOutline size={45} />}
                </div>
            </div>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "opacity-100" : "max-h-0 opacity-0"} w-full`}>
                <div className="p-4">
                    {NavList.map((item, i) => (
                        <a key={i} href={`#${item.id}`} className='flex gap-3 items-center my-5 hover:bg-white/20 p-3 rounded-2xl cursor-pointer'>
                            <div className='text-2xl'>{item.icons}</div>
                            <div className='text-2xl'>{item.heading}</div>
                        </a>
                    ))}
                    <button className='w-full h-10 mt-4 bg-white rounded-xl'></button>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar
