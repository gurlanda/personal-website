import React, { useRef, useEffect } from 'react';
import perspectiveFactorPixels from './perspectiveFactorPixels';

const ParallaxContainer: React.FC<{
  children?: React.ReactNode;
  deltaY?: number;
}> = ({ children, deltaY }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  if (containerRef.current && deltaY !== undefined) {
    // TODO: Stop the container from scrolling too far
    // Determine how many pixels is 100vh
    // Stop the container from scrolling beyond 100vh

    const scrollSpeed = 1;
    containerRef.current.scrollTop += deltaY * scrollSpeed;
    console.log('Here!');
  }

  return (
    <div
      ref={containerRef}
      style={{
        // display: 'flex',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        width: '50vw',
        height: '80vh',
        overflowX: 'hidden',
        overflowY: 'auto',
        perspective: `${perspectiveFactorPixels}px`,
        // perspectiveOrigin: `center ${perspectiveOrigin}%`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxContainer;
