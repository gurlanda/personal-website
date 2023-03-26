import React from 'react';

const ParallaxGroup: React.FC<{
  width: string;
  children?: React.ReactNode;
  zIndex?: number;
}> = ({ width, children, zIndex }) => {
  return (
    <div
      className="relative h-screen overflow-hidden [transform-style:preserve-3d]"
      style={{ width, zIndex }}
    >
      {children}
    </div>
  );
};

export default ParallaxGroup;
