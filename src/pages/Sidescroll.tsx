import React, { useEffect, useRef } from 'react';
import forestLayers from '../assets/img/backgrounds/forest/ForestLayers';

function parallaxLayerStyle(layerNumber: number): React.CSSProperties {
  const translateZ = `translateZ(${layerNumber}px)`;
  const scale = layerNumber !== 0 ? `scale(${layerNumber * -1 + 1})` : '';

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

    const scrollSpeed = 1.05;
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
    <div className="parallax-container " ref={imgContainerRef}>
      <div
        className="h-[108px] w-[200vw] bottom-0"
        style={parallaxLayerStyle(0)}
      >
        <img
          src={forestLayers.layer2}
          alt=""
          className=" object-cover h-[108px] bottom-0"
        />
      </div>

      <div
        className="h-[100vh] w-[200vw] bottom-0"
        style={parallaxLayerStyle(-1)}
      >
        <img src={forestLayers.layer3} alt="" className=" object-cover" />
      </div>

      <div
        className="h-[100vh] w-[200vw] bottom-0"
        style={parallaxLayerStyle(-2)}
      >
        <img src={forestLayers.layer4} alt="" className=" object-cover" />
      </div>

      <div
        className="h-[100vh] w-[200vw] bottom-0"
        style={parallaxLayerStyle(-3)}
      >
        <img src={forestLayers.layer5} alt="" className=" object-cover" />
      </div>

      <div
        className="h-[100vh] w-[200vw] bottom-0"
        style={parallaxLayerStyle(-4)}
      >
        <img src={forestLayers.layer6} alt="" className=" object-cover" />
      </div>
    </div>
  );
};

export default Sidescroll;
