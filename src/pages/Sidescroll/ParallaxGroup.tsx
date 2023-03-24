import React from 'react';

const ParallaxGroup: React.FC<{
  width: string;
  children?: React.ReactNode;
}> = ({ width, children }) => {
  return (
    <div
      className="relative h-screen overflow-hidden [transform-style:preserve-3d]"
      style={{ width }}
    >
      {children}
    </div>
  );
};

export default ParallaxGroup;
