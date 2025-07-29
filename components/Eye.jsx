'use client';
import React, { useRef, useEffect, useState } from 'react';

const Eye = ({ x, y }) => {
  const eyeRef = useRef(null);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const eye = eyeRef.current;
    if (!eye) return;

    const rect = eye.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = x - centerX;
    const dy = y - centerY;

    const angle = Math.atan2(dy, dx);
    const radius = 40; 

    const moveX = Math.cos(angle) * radius;
    const moveY = Math.sin(angle) * radius;

    setPupilPos({ x: moveX, y: moveY });
  }, [x, y]);

  return (
    <div className='flex gap-3'>
      <div
        ref={eyeRef}
        className="w-[150px] h-[150px] rounded-full bg-white flex items-center justify-center relative"
      >
        {/* Pupil */}
        <div
          className="h-[70px] w-[70px] bg-black rounded-full absolute transition-all duration-75"
          style={{
            transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
          }}
        >
          <div className="bg-white h-6 w-6 rounded-full m-auto mt-[15px]" />
        </div>

      </div>
      <div
        ref={eyeRef}
        className="w-[150px] h-[150px] rounded-full bg-white flex items-center justify-center relative"
      >
        {/* Pupil */}
        <div
          className="h-[70px] w-[70px] bg-black rounded-full absolute transition-all duration-75"
          style={{
            transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
          }}
        >
          <div className="bg-white h-6 w-6 rounded-full m-auto mt-[15px]" />
        </div>

      </div>
    </div>
  );
};

export default Eye;
