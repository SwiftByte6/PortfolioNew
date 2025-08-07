import React from 'react'

const ProjectButton = ({text}) => {
  return (

    <div className="relative group px-2 py-1 rounded-2xl overflow-hidden">
  {/* Circle effect */}
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="w-2 h-2 bg-white rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 ease-in-out" />
  </div>

  {/* Actual content */}
  <button className="relative z-10 text-black group-hover:text-black transition-colors duration-300">
    Hover me
  </button>
</div>
  )
}

export default ProjectButton
