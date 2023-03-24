import React, { ReactNode } from 'react';

function parallaxLayerStyle(layerNumber: number): React.CSSProperties {
  const translateZ = `translateZ(${layerNumber}px)`;
  const scale =
    layerNumber === 0 || layerNumber === 1
      ? ''
      : `scale(${layerNumber * -1 + 1})`;

  return {
    position: 'absolute',
    transform: `${translateZ} ${scale}`,
    zIndex: layerNumber * 10,
  };
}

const ParallaxLayer: React.FC<{
  imageUrl: string;
  layerNumber: number;
  children?: ReactNode;
}> = ({ imageUrl, layerNumber, children }) => {
  return (
    <div
      className="h-[100vh] w-full bg-contain bg-repeat-x"
      style={{
        ...parallaxLayerStyle(layerNumber),
        backgroundImage: `url('${imageUrl}')`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxLayer;
