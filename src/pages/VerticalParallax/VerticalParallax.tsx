import React, { useState, useEffect } from 'react';
import ParallaxContainer from './ParallaxContainer';
import ParallaxGroup from './ParallaxGroup';
import ParallaxLayer from './ParallaxLayer';
import forestLayers from '../../assets/img/backgrounds/forest/ForestLayers';
import swampLayers from '../../assets/img/backgrounds/swamp/SwampLayers';

const VerticalParallax: React.FC<{}> = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    function scrollListener(event: WheelEvent) {
      setScrollTop(event.deltaY);
    }

    window.addEventListener('wheel', scrollListener);
  });

  return (
    <div className=" flex flex-col items-center justify-center h-[150vh]">
      <ParallaxContainer deltaY={scrollTop}>
        <ParallaxGroup zIndex={0}>
          {swampLayers.map((imageUrl, index) => (
            <ParallaxLayer
              layerNumber={index * -1}
              imageUrl={imageUrl}
              key={index}
            />
          ))}
        </ParallaxGroup>
        {/* <div className=" relative bg-green-800 h-[50vh] w-screen z-40"></div>
      <ParallaxGroup>
        {forestLayers.map((imageUrl, index) => (
          <ParallaxLayer
            layerNumber={index * -1}
            imageUrl={imageUrl}
            key={index}
          />
        ))}
      </ParallaxGroup> */}
      </ParallaxContainer>
      <ParallaxContainer deltaY={scrollTop}>
        <ParallaxGroup>
          {forestLayers.map((imageUrl, index) => (
            <ParallaxLayer
              layerNumber={index * -1}
              imageUrl={imageUrl}
              key={index}
            />
          ))}
        </ParallaxGroup>
      </ParallaxContainer>
    </div>
  );
};

export default VerticalParallax;
