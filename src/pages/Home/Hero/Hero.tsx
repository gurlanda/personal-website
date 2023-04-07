import React, { useContext, useEffect, useRef } from 'react';
import SunContext from '../../../context/SunContext';
import Navbar from './Navbar';

type Point = [number, number];
const Hero: React.FC<{}> = () => {
  const headerElementRef = useRef<HTMLElement>(null);
  const firstNameRef = useRef<HTMLSpanElement>(null);
  const fullNameRef = useRef<HTMLHeadingElement>(null);
  const sunContext = useContext(SunContext);

  function getPositionAndDimensions(element: HTMLElement): {
    dimensions: Point;
    position: Point;
  } {
    const boundingRect = element.getBoundingClientRect();
    const dimensions: Point = [boundingRect.width, boundingRect.height];
    const position: Point = [boundingRect.left, boundingRect.top];

    return { dimensions, position };
  }

  function chooseTargetSunElementResponsively(): HTMLElement | null {
    const windowWidth = window.innerWidth;
    const mlBreakpointPx = 896;
    if (windowWidth < mlBreakpointPx) {
      return fullNameRef.current;
    } else {
      return firstNameRef.current;
    }
  }

  useEffect(() => {
    function updateSunSize() {
      if (!sunContext) {
        return;
      }

      const targetSunElement = chooseTargetSunElementResponsively();
      if (!targetSunElement) {
        return;
      }

      const { dimensions, position } =
        getPositionAndDimensions(targetSunElement);
      sunContext.setTargetDimensions(dimensions);
      sunContext.setTargetPosition(position);
    }

    // Update the size on first render and on window resizing
    updateSunSize();
    window.addEventListener('resize', updateSunSize);

    return () => {
      window.removeEventListener('resize', updateSunSize);
    };
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

        ml:items-start ml:pt-[30vh] ml:ml-[10vw] lg:pt-[35vh] max-w-[1500px]"
      >
        <h1
          className=" font-signika-negative leading-none font-semibold text-7xl text-center max-w-sm
          
          2xs:text-[5rem]
          xs:max-w-lg

          ms:text-8xl ml:max-w-none
          lg:text-[7rem]
          xl:text-[10rem]"
          ref={fullNameRef}
        >
          <span ref={firstNameRef}>Gamliel</span> Urlanda
        </h1>
        <h2 className=" text-center font-thin text-5xl pl-2 max-w-sm xs:max-w-lg ml:max-w-none">
          Front-end developer
        </h2>
      </div>
    </header>
  );
};

export default Hero;
