import React from 'react';

const Hero: React.FC<{}> = () => {
  return (
    <header className=" w-screen h-screen bg-yellow-50">
      <nav className="hidden">
        <a href="#proficiencies">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </nav>

      {/* Text */}
      <div className="flex flex-col justify-center h-full mx-[15vw] font-signika-negative text-slate-900">
        <h1 className="  leading-none font-semibold text-[10rem] text-slate-800 ">
          Gam Urlanda
        </h1>
        <h2 className=" font-roboto font-thin text-5xl pl-2">
          Front-end developer
        </h2>
      </div>
    </header>
  );
};

export default Hero;
