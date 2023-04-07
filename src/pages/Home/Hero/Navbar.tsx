import React, { useRef, useState } from 'react';

const Navbar: React.FC<{}> = () => {
  const navElement = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <header>
      <button
        aria-controls="primary-navigation"
        aria-expanded="false"
        className={`absolute top-8 right-8 z-[9999] w-10 aspect-square fa-solid ${
          isVisible ? 'fa-xmark' : 'fa-bars'
        } text-3xl text-orange-900 ms:hidden`}
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav
        id="primary-navigation"
        ref={navElement}
        className={`
          flex flex-col 
  fixed top-0 right-0 z-[9998] gap-5
  min-h-screen pl-7 pr-32 py-[min(20vh,5rem)]  
  bg-yellow-300 max-ms:saturate-50 
  font-paragraph-fira-sans font-light text-orange-900 text-2xl 
  transition-transform ${
    isVisible ? 'max-ms:translate-x-[0%]' : 'max-ms:translate-x-full'
  } 
  
  ms:relative ms:flex-row ms:justify-end ms:gap-20 ms:items-center 
  ms:px-7 ms:pt-5 ms:pb-10 ms:min-h-[auto]
  ms:backdrop-blur-none ms:bg-transparent 
  `}
      >
        <a href="#proficiencies" onClick={() => setIsVisible(false)}>
          Skills
        </a>
        <a href="#projects" onClick={() => setIsVisible(false)}>
          Projects
        </a>
        <a href="#contact" onClick={() => setIsVisible(false)}>
          Contact
        </a>
        <a href="#about" onClick={() => setIsVisible(false)}>
          About
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
