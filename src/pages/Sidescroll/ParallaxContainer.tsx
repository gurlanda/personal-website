import React, { useEffect, useRef, ReactNode } from 'react';

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
  }, [containerRef.current]);

  return (
    <div
      className=" [perspective:1px] flex flex-wrap flex-col w-screen h-screen overflow-x-auto overflow-y-hidden"
      ref={containerRef}
    >
      {children}
    </div>
  );
};

export default ParallaxContainer;
