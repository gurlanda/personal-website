import React, { useRef, useState, useEffect } from 'react';
import Sun from './Sun';

const Hero: React.FC<{}> = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [componentWidth, setComponentWidth] = useState<number>(0);
  const [componentHeight, setComponentHeight] = useState<number>(0);

  useEffect(() => {
    if (!headerRef.current) {
      return;
    }

    setComponentWidth(headerRef.current.offsetWidth);
    setComponentHeight(headerRef.current.offsetHeight);
  }, []);

  return (
    <header
      className=" relative w-screen h-screen  text-orange-900 overflow-x-clip"
      ref={headerRef}
    >
      <div className="relative w-full flex justify-end z-50 px-24 py-10">
        <nav className=" flex justify-between gap-20 text-2xl font-thin">
          <a href="#proficiencies">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </nav>
      </div>

      {/* Text */}
      <div className="absolute flex flex-col justify-center h-full mx-[10vw]   z-50">
        <h1 className=" font-signika-negative leading-none font-semibold text-[10rem]  ">
          Gam Urlanda
        </h1>
        <h2 className="  font-thin text-5xl pl-2">Front-end developer</h2>
      </div>

      {/* Sun */}
      <Sun top={componentHeight * 0.5} left={componentWidth * (2 / 7)} />
    </header>
  );
};

export default Hero;
