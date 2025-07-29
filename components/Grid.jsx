import React from 'react'
import Image from 'next/image'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'

const Grid = () => {
  return (
    <section className="w-full px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-6 grid-rows-7 gap-4 max-w-7xl mx-auto">

        {/* 1. About Me */}
        <div className="col-span-1 sm:col-span-2 row-span-5 bg-white/5 rounded-xl p-6 backdrop-blur-md">
          <h2 className="text-2xl font-semibold text-white mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-balance text-sm sm:text-base md:text-lg">
            Hey! I'm <span className="text-white font-semibold">Rohit</span>, a full-stack web developer who thrives on building intuitive and efficient digital experiences. My journey into tech started with a curiosity for how things work — and now, I turn that curiosity into code that helps people solve real problems.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4 text-sm sm:text-base md:text-lg">
            I love working across the stack — from clean, responsive frontends to scalable backend APIs. I'm especially focused on user-centered design, performance, and keeping things simple yet powerful.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4 text-sm sm:text-base md:text-lg">
            When I’m not coding, you’ll find me exploring new tools, sharing what I learn, or refining my side projects. Let’s build something meaningful together.
          </p>
        </div>

        {/* 2. Center SVG */}
        <div className="col-span-1 sm:col-span-2 row-span-3 col-start-1 sm:col-start-3 row-start-3 flex items-center justify-center bg-white/5 rounded-xl p-4">
          {/* Replace with your own SVG or animated image */}
          <Image src="/dev-illustration.svg" width={220} height={220} alt="Developer Illustration" className="object-contain" />
        </div>

        {/* 3. Personality / Values */}
        <div className="col-span-1 sm:col-span-2 row-span-5 col-start-1 sm:col-start-5 row-start-2 bg-white/5 rounded-xl p-6 backdrop-blur-md">
          <h2 className="text-2xl font-semibold text-white mb-4">What I Value</h2>
          <ul className="text-gray-300 space-y-2 list-disc list-inside text-sm sm:text-base md:text-lg">
            <li>Putting users first in design decisions</li>
            <li>Writing clean, scalable code</li>
            <li>Staying consistent with learning</li>
            <li>Teamwork and open communication</li>
          </ul>
        </div>

        {/* 4. Experience / Skills */}
        <div className="col-span-2 sm:col-span-2 row-span-3 col-start-3 sm:col-start-3 row-start-1 bg-white/5 rounded-xl p-6 backdrop-blur-md">
          <h2 className="text-2xl font-semibold text-white mb-4">Experience & Skills</h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
            With over X years in web development, I specialize in React, Node.js, and modern JavaScript frameworks. I've contributed to various projects ranging from startups to enterprise applications, always delivering scalable and performant solutions.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4 text-sm sm:text-base md:text-lg">
            Constantly sharpening my skills with best practices and the latest technologies.
          </p>
        </div>

        {/* 5. Tech Stack */}
        <div className="col-span-1 sm:col-span-6 row-span-2 row-start-6 bg-white/5 rounded-xl p-6 flex flex-wrap items-center justify-center gap-6">
          <h2 className="w-full text-center text-xl text-white font-semibold mb-4">Tech Stack</h2>
          <FaHtml5 className="text-orange-500 text-4xl" title="HTML5" />
          <FaCss3Alt className="text-blue-500 text-4xl" title="CSS3" />
          <FaReact className="text-cyan-400 text-4xl" title="React.js" />
          <FaNodeJs className="text-green-500 text-4xl" title="Node.js" />
          <FaGitAlt className="text-red-500 text-4xl" title="Git" />
          {/* Add more icons if you want */}
        </div>

      </div>
    </section>
  )
}

export default Grid
