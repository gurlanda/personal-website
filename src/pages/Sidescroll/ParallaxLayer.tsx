import React from 'react';

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

const ParallaxLayer: React.FC<{ imageUrl: string; layerNumber: number }> = ({
  imageUrl,
  layerNumber,
}) => {
  return (
    <div
      className="h-[100vh] w-full bg-contain bg-repeat-x"
      style={{
        ...parallaxLayerStyle(layerNumber),
        backgroundImage: `url('${imageUrl}')`,
      }}
    ></div>
  );
};

export default ParallaxLayer;
