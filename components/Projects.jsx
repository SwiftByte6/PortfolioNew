import React from 'react'
import ProjectButton from './ProjectButton'
import { InteractiveHoverButton } from './magicui/interactive-hover-button';

const Projects = () => {
  const projects = [
    {
      name: "HostelPe",
      image: "/Hostel.png",
      description: "A hostel discovery platform for students to find and compare hostels based on location, amenities, and reviews.",
      techStack: ["Next.js", "TailwindCSS", "Supabase", "MySQL"],
      liveSite: "https://hostelpe.in"
    },
    {
      name: "KuroCLI",
      image: "/Kuro.png",
      description: "A command-line tool to scaffold modern React/Tailwind projects instantly with plug-and-play architecture.",
      techStack: ["TailwindCSS", "NextJs"],
      liveSite: "https://kurocli.netlify.app"
    },
    {
      name: "Expense Tracker",
      image: "/Tracker.png",
      description: "A personal finance tracker to monitor income, expenses, and generate monthly spending insights.",
      techStack: ["React", "Chart.js", "TailwindCSS"],
      liveSite: "https://tried1-swiftbyte6s-projects.vercel.app/expense"
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
            className="w-full max-w-[450px] h-[480px] bg-white/10 border border-white/10 rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl"
          >
            <div className="h-[57%] overflow-hidden rounded-t-2xl">
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

              <a
                href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm  hover:underline"
              >
                <InteractiveHoverButton>View Live Link</InteractiveHoverButton>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
