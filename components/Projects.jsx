import React from 'react'
import ProjectButton from './ProjectButton'
import { InteractiveHoverButton } from './magicui/interactive-hover-button';

const Projects = () => {
  const projects = [
     {
      name: "Cesa Commitee",
      image: "/Cesa.png",
      description: "A committee website for CESA 2025, showcasing event details, member profiles, and registration functionalities.",
      techStack: ["Next.js", "TailwindCSS"],
      liveSite: "https://cesa2025-lwym.vercel.app/"
    },
    {
      name: "HostelPe",
      image: "/Hostel.png",
      description: "A hostel discovery platform for students to find and compare hostels based on location, amenities, and reviews.",
      techStack: ["Next.js", "TailwindCSS", "Supabase", "MySQL"],
      liveSite: "https://hostelpe.in"
    },
    
    {
      name: "Favee.shop",
      image: "/Favee.png",
      description: "A modern women's ecommerce platform offering curated fashion, beauty, and lifestyle products with seamless shopping experience.",
      techStack: ["Next.js", "TailwindCSS", "Razorpay", "Supabase"],
      liveSite: "https://favee.shop",
      status: "In Process"
    },
    {
      name: "AuraAsync",
      image: "/aura.png",
      description: "An AI-inspired fashion brand that leverages machine learning to create personalized style recommendations and trend predictions.",
      techStack: ["Next.js", "AI/ML", "TailwindCSS", "Python"],
      liveSite: "https://auraasync.in"
    },
    {
      name: "Ekotex",
      image: "/Ekotex.png",
      description: "An e-commerce platform for sustainable fashion and eco-friendly products, empowering conscious consumerism.",
      techStack: ["Next.js", "TailwindCSS"],
      liveSite: "https://www.ekotexelectrificient.com/"
    },
    {
      name: "GlobalElevate",
      image: "/Global.png",
      description: "A global mentorship and networking platform connecting students and professionals across borders.",
      techStack: ["Next.js", "TailwindCSS"],
      liveSite: "https://theglobalelevate.com"
    },
    {
      name: "KuroCLI",
      image: "/Kuro.png",
      description: "A command-line tool to scaffold modern React/Tailwind projects instantly with plug-and-play architecture.",
      techStack: ["TailwindCSS", "NextJs"],
      liveSite: "https://kurocli.netlify.app"
    }
   
  ];

  return (
    <section
      id='projects'
      className="px-6 md:px-42 py-12">
      <h1 className="text-5xl sm:text-6xl text-center font-sora font-semibold bg-gradient-to-b from-white to-white/10 bg-clip-text text-transparent">
        Some of my Works
      </h1>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-[450px] h-auto bg-white/10 border border-white/10 rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl"
          >
            <div className="h-[250px] overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 space-y-3">
              <h2 className="text-white text-2xl font-bold">{project.name}</h2>
              <p className="text-white/70 text-sm">{project.description}</p>

              <ul className="flex flex-wrap gap-2 mt-2">
                {project.techStack.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="text-xs bg-white/10 text-white px-2 py-1 rounded"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  <InteractiveHoverButton>View Live Link</InteractiveHoverButton>
                </a>
                {project.status && (
                  <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded border border-yellow-500/30">
                    {project.status}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
