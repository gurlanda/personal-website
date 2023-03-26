import React, { useEffect, useRef, ReactNode } from 'react';
import perspectiveFactorPixels from './perspectiveFactorPixels';

const ParallaxContainer: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  function horizontalScrollOnWheelEvent(event: WheelEvent) {
    if (!containerRef.current) {
      return;
    }

    const scrollSpeed = 0.5;
    containerRef.current.scrollLeft += event.deltaY * scrollSpeed;
  }

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    containerRef.current.addEventListener(
      'wheel',
      horizontalScrollOnWheelEvent
    );
  }, []);

  return (
    <div
      className=" flex flex-wrap flex-col w-screen h-screen overflow-x-auto overflow-y-hidden"
      ref={containerRef}
      style={{
        perspective: perspectiveFactorPixels,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxContainer;
