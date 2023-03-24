import React from 'react';
import ParallaxContainer from './ParallaxContainer';
import ParallaxGroup from './ParallaxGroup';
import ParallaxLayer from './ParallaxLayer';
import forestLayers from '../../assets/img/backgrounds/forest/ForestLayers';
import swampLayers from '../../assets/img/backgrounds/swamp/SwampLayers';

const Sidescroll: React.FC<{}> = () => {
  return (
    <ParallaxContainer>
      <ParallaxGroup width="120vw">
        {swampLayers.map((imageUrl, index) => (
          <ParallaxLayer
            layerNumber={index * -1}
            imageUrl={imageUrl}
            key={index}
          />
        ))}
      </ParallaxGroup>
      <ParallaxGroup width="120vw">
        {forestLayers.map((imageUrl, index) => (
          <ParallaxLayer
            layerNumber={index * -1}
            imageUrl={imageUrl}
            key={index}
          />
        ))}
      </ParallaxGroup>
    </ParallaxContainer>
  );
};

export default Sidescroll;
