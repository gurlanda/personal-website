import React, { useContext, useEffect, useRef } from 'react';
import SunContext from '../../../context/SunContext';
import Navbar from './Navbar';

const Hero: React.FC<{}> = () => {
  const headerElementRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const sunContext = useContext(SunContext);

  useEffect(() => {
    if (!sunContext || !nameRef.current) {
      return;
    }

    const boundingRect = nameRef.current.getBoundingClientRect();
    const dimensions: [number, number] = [
      boundingRect.width,
      boundingRect.height,
    ];
    const position: [number, number] = [boundingRect.left, boundingRect.top];

    sunContext.setTargetDimensions(dimensions);
    sunContext.setTargetPosition(position);
  }, []);

  return (
    <header
      className=" relative w-screen h-screen text-orange-900"
      ref={headerElementRef}
    >
      <Navbar />

      {/* Text */}
      <div
        className="relative h-full w-full flex flex-col justify-start gap-4 items-center z-50 pt-[23vh]

        ml:items-start ml:pt-[30vh] ms:ml-[10vw] lg:pt-[35vh] max-w-[1500px]"
      >
        <h1
          className=" font-signika-negative leading-none font-semibold text-7xl text-center max-w-sm
          
          2xs:text-[5rem]
          xs:max-w-lg

          ms:text-8xl ml:max-w-none
          lg:text-[7rem]
          xl:text-[10rem]"
        >
          <span ref={nameRef}>Gamliel</span> Urlanda
        </h1>
        <h2 className=" text-center font-thin text-5xl pl-2 max-w-sm xs:max-w-lg ml:max-w-none">
          Front-end developer
        </h2>
      </div>
    </header>
  );
};

export default Hero;
