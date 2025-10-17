"use client"

import { Code, Mail, MessageCircle } from "lucide-react"
import { UppertechStack, LowerTechStack } from "@/data/Tech"
import { useRef, useState } from "react"
import Eye from "./Eye"

export default function AboutUs() {
  const SectionRef = useRef(null)
  const [coordinate, setCoordinate] = useState({
    x: 0,
    y: 0
  });

  const handleMouseMove = (e) => {
    const rect = SectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCoordinate({ x, y });
  };


  return (
    <div
      id="about"
      ref={SectionRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen p-2 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl sm:text-6xl text-center font-sora font-semibold mb-10 bg-gradient-to-b from-white to-white/10 bg-clip-text text-transparent">
          About Me
        </h1>
        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 mt-4 grid-rows-none gap-4 min-h-[1200px] sm:grid-cols-6 sm:grid-rows-7 sm:h-[800px] lg:h-[900px]">
          {/* Top-left: About Me Section */}
          <div className="bg-black/40 backdrop-blur-md border border-gray-600/30 rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gray-500/20 col-span-1 row-span-1 sm:col-span-2 sm:row-span-4">
            <div className="h-full flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
                <Code className="w-6 h-6 text-gray-300" />
                About Me
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                I'm <span className="text-gray-100 font-semibold">Rohit</span>, a driven full-stack developer who loves turning
                ideas into production-ready applications. I specialize in building clean, scalable solutions using modern tech
                like <span className="text-gray-100">Next.js</span>, <span className="text-gray-100">Supabase</span>,{" "}
                <span className="text-gray-100">MySQL</span>, and <span className="text-gray-100">TailwindCSS</span>. Whether it’s
                a scheduling system like <i>MyTimeTable+</i> or a smart hostel-finder, I focus on intuitive design, performance,
                and real-world utility.
              </p>
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full"></div>
            </div>
          </div>


          {/* Center top: SVG Illustration */}
          <div className="bg-black/40 backdrop-blur-md border border-gray-600/30 rounded-2xl flex items-center justify-center hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 col-span-1 row-span-1 sm:col-span-4 sm:row-span-2 sm:col-start-3 sm:row-start-1 mt-0 group">
            <div className="text-center">

              {/* Icon with hover spin */}
              <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-4 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center group-hover:animate-spin-slow transition-transform duration-300">
                <svg viewBox="0 0 100 100" className="w-12 h-12 lg:w-16 lg:h-16 text-gray-100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M30 40 L45 55 L70 30"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="50" cy="50" r="8" fill="currentColor" />
                </svg>
              </div>

              {/* Text Content */}
              <h3 className="text-white font-semibold text-lg">Craft. Code. Create.</h3>
              <p className="text-gray-400 text-sm mt-1">Innovating interfaces & scalable systems.</p>
            </div>
          </div>


          {/* Middle: Skills Summary */}
          <div className="bg-black/40 backdrop-blur-md border flex items-center justify-center border-gray-600/30 rounded-2xl p-4 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gray-500/20 col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 sm:col-start-3 sm:row-start-3">
            <Eye x={coordinate.x} y={coordinate.y} />
          </div>

       
          {/* Bottom-left: Contact Me Teaser */}
          <div className="bg-black/40 backdrop-blur-md border border-gray-600/30 rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gray-500/20 col-span-1 row-span-1 sm:col-span-2 sm:row-span-5 sm:col-start-5 sm:row-start-3">
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-100 mb-4 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-gray-300" />
                Let's Connect!
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities.
              </p>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg text-gray-100 font-medium hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600/50">
                  <Mail className="w-4 h-4" />
                  Email Me
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-black/20 border border-gray-500/30 rounded-lg text-gray-100 font-medium hover:bg-black/40 transition-all duration-300">
                  <MessageCircle className="w-4 h-4" />
                  Let's Chat
                </button>
              </div>
                {/* Past Experience subsection (placeholder logo & dates) */}
                <div className="mt-6 pt-4 border-t border-gray-600/20">
                  <h4 className="text-lg font-semibold text-gray-100">Past Experience</h4>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="w-12 h-12  rounded-md flex items-center justify-center overflow-hidden">
                      {/* Placeholder image - add your logo to public/auraasyncc-logo.png */}
                      <img src="/auraasync.ico" alt="auraasyncc.in logo (add later)" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-100 font-medium">auraasyncc.in</div>
                      <div className="text-xs text-gray-400">Role: Intern</div>
                      <div className="text-xs text-gray-400">Duration: 2 weeks — October</div>
                    </div>
                  </div>
                </div>
            </div>
          </div>

             {/* Bottom-right: Tech Stack Marquee */}
          <div className="bg-black/40 backdrop-blur-md border border-gray-600/30 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gray-500/20 col-span-1 row-span-1 sm:col-span-4 sm:row-span-3 sm:col-start-1 sm:row-start-5 mt-0">
            <div className="h-full flex flex-col">
              <div className="p-4 border-b border-gray-600/30">
                <h3 className="text-xl font-bold text-gray-100 text-center">Tech Stack</h3>
              </div>
              <div className="flex-1 flex items-center">
                <div className="w-full overflow-hidden">
                  <div className="animate-marquee whitespace-nowrap">
                    <div className="inline-block">
                      {UppertechStack.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-block  gap mx-4 px-4 py-2 bg-gradient-to-r from-gray-700/60 to-gray-800/60 rounded-lg text-gray-200 text-sm font-medium shadow-lg border border-gray-600/30"
                          style={{
                            textShadow: "0 0 10px rgba(156, 163, 175, 0.4)",
                          }}
                        >
                          <div className="flex gap-3 items-center justify-center">
                            {tech.icon}
                            {tech.name}
                          </div>
                        </span>
                      ))}
                    </div>
                    <div className="inline-block">
                      {UppertechStack.map((tech, index) => (
                        <span
                          key={`duplicate-${index}`}
                          className="inline-block mx-4 px-4 py-2 bg-gradient-to-r from-gray-700/60 to-gray-800/60 rounded-lg text-gray-200 text-sm font-medium shadow-lg border border-gray-600/30"
                          style={{
                            textShadow: "0 0 10px rgba(156, 163, 175, 0.4)",
                          }}
                        >
                          <div className="flex gap-3 items-center justify-center">
                            {tech.icon}
                            {tech.name}
                          </div>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="overflow-hidden w-full mt-4">
                    <div className="flex animate-marquee whitespace-nowrap">
                      {[...LowerTechStack, ...LowerTechStack].map((tech, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 mx-4 px-4 py-2 bg-gradient-to-r from-gray-700/60 to-gray-800/60 rounded-lg text-gray-200 text-sm font-medium shadow-lg border border-gray-600/30"
                          style={{
                            textShadow: "0 0 10px rgba(156, 163, 175, 0.4)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <span className="text-lg">{tech.icon}</span>
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
     @keyframes marqueeReverse {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marqueeReverse {
  animation: marqueeReverse 10s linear infinite;
}
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  )
}
