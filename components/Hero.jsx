'use client'
import React from 'react'
import Button from './Button'
import Image from 'next/image'
// Ensure framer-motion is installed and up to date. If you still get errors, try deleting node_modules and reinstalling.
import { motion } from 'framer-motion'



const Hero = () => {
    return (
        <div 
        id='home'
        className="h-screen w-full flex items-center justify-center text-center px-4 relative">
        
            <div className="flex flex-col items-center justify-center gap-6 w-full max-w-4xl">
                
                <motion.div
                  className="mt-12 max-[600px]:mt-6"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7,delay:0.7 }}
                >
                  <h1 className="text-6xl max-[500px]:text-[42px] bg-gradient-to-b from-white to-white/10 bg-clip-text text-transparent font-sora font-semibold text-balance">
                    Hi, I'm Rohit
                  </h1>
                     <h1 className="text-6xl max-[600px]: mt-4 max-[500px]:text-[42px] 
                               bg-gradient-to-b from-white to-white/10 
                               bg-clip-text text-transparent 
                               font-sora font-semibold text-balance">
                    Full-Stack Web Developer
                </h1>
                </motion.div>
                

             

                <motion.p 
                 initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7,delay:0.7 }}
                className="mt-4 text-gray-300 text-2xl max-[500px]:text-xl 
                              text-center tracking-wide leading-snug 
                              max-w-[800px]">
                    I’m a full-stack developer passionate about building modern, clean, and accessible web experiences — always learning, always creating.
                </motion.p>

                <motion.div
                 initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7,delay:0.7 }}
                className="flex flex-wrap gap-4 justify-center mt-6">
                    <Button value="View Projects" />
                    <Button value="Contact me" />
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
