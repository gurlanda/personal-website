import React, { useState, useEffect, useRef } from 'react';
import lightBubbles from '../assets/img/backgrounds/pexels-1.jpg';
import darkBubbles from '../assets/img/backgrounds/pexels-3.jpg';
import brick from '../assets/img/backgrounds/pexels-2.jpg';

const Sidescroll: React.FC<{}> = () => {
  const imgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  return (
    <div className="parallax " ref={imgContainerRef}>
      <div className="parallax__layer--base parallax__layer h-[50vh] w-[200vw] bottom-0">
        <img src={brick} alt="" className="h-full w-full" />
      </div>

      <div className="parallax__layer parallax__layer--midground  h-[66vh] w-[200vw] -z-10 bottom-0">
        <img src={lightBubbles} alt="" className=" h-full w-full" />
      </div>

      <div className="parallax__layer parallax__layer--back  h-[100vh] w-[200vw] -z-20 bottom-0">
        <img src={darkBubbles} alt="" className=" h-full w-full" />
      </div>
    </div>
  );
};

export default Sidescroll;
