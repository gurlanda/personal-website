import React, { ReactNode } from 'react';
import perspectiveFactorPixels from './perspectiveFactorPixels';

function scaleFactor(layerNumber: number): number {
  if (layerNumber === 1) {
    return 1;
  }

  return (perspectiveFactorPixels - layerNumber) / perspectiveFactorPixels;
}

function parallaxLayerStyle(layerNumber: number): React.CSSProperties {
  const translateZ = `translateZ(${layerNumber}px)`;
  const scale = `scale(${scaleFactor(layerNumber)})`;

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
      className="h-full w-[100vw] bg-cover bg-center bg-repeat-x"
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
