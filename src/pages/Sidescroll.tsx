import React, { useEffect, useRef } from 'react';
import forestLayers from '../assets/img/backgrounds/forest/ForestLayers';

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

const Sidescroll: React.FC<{}> = () => {
  const imgContainerRef = useRef<HTMLDivElement>(null);

  function horizontalScrollOnWheelEvent(event: WheelEvent) {
    if (!imgContainerRef.current) {
      return;
    }

    const scrollSpeed = 0.75;
    imgContainerRef.current.scrollLeft += event.deltaY * scrollSpeed;
  }

  useEffect(() => {
    if (!imgContainerRef.current) {
      return;
    }

    imgContainerRef.current.addEventListener(
      'wheel',
      horizontalScrollOnWheelEvent
    );
  }, [imgContainerRef.current]);

  return (
    <div className="parallax-container" ref={imgContainerRef}>
      <div className="parallax-group">
        <div
          className="h-[100vh] w-full"
          style={{
            ...parallaxLayerStyle(0),
            backgroundImage: `url('${forestLayers.layer1}')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat-x',
          }}
        ></div>
        <div
          className="h-[100vh] w-full"
          style={{
            ...parallaxLayerStyle(-1),
            backgroundImage: `url('${forestLayers.layer2}')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat-x',
          }}
        ></div>
        <div
          className="h-[100vh] w-full"
          style={{
            ...parallaxLayerStyle(-2),
            backgroundImage: `url('${forestLayers.layer3}')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat-x',
          }}
        ></div>
        <div
          className="h-[100vh] w-full"
          style={{
            ...parallaxLayerStyle(-3),
            backgroundImage: `url('${forestLayers.layer4}')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat-x',
          }}
        ></div>
        <div
          className="h-[100vh] w-full"
          style={{
            ...parallaxLayerStyle(-4),
            backgroundImage: `url('${forestLayers.layer5}')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat-x',
          }}
        ></div>
        <div
          className="h-[100vh] w-full"
          style={{
            ...parallaxLayerStyle(-5),
            backgroundImage: `url('${forestLayers.layer6}')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat-x',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Sidescroll;
