import React, { useRef } from 'react';
import useComponentDimensions from '../../../hooks/useComponentDimensions';
import useComponentPositionInContainer from '../../../hooks/useComponentPositionInContainer';
import Sun from './Sun';
import Navbar from './Navbar';

const Hero: React.FC<{}> = () => {
  const headerElementRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const [nameWidth, nameHeight] = useComponentDimensions(nameRef);
  const [nameLeft, nameTop] = useComponentPositionInContainer(nameRef);

  function getMiddlePx(offsetPx: number, sizePx: number): number {
    return offsetPx + sizePx * 0.5;
  }

  function getSunTop(): number {
    return getMiddlePx(nameTop, nameHeight);
  }

  function getSunLeft(): number {
    return getMiddlePx(nameLeft, nameWidth);
  }

  function getSunRadiusPx(): number {
    return Math.min(nameWidth * 0.43, 250);
  }

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

      {/* Sun */}
      <Sun
        top={getSunTop()}
        left={getSunLeft()}
        sunDiskRadiusPx={getSunRadiusPx()}
      />
    </header>
  );
};

export default Hero;
