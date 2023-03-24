import React from 'react';
import ParallaxContainer from './ParallaxContainer';
import ParallaxGroup from './ParallaxGroup';
import ParallaxLayer from './ParallaxLayer';
import forestLayers from '../../assets/img/backgrounds/forest/ForestLayers';
import swampLayers from '../../assets/img/backgrounds/swamp/SwampLayers';

const Sidescroll: React.FC<{}> = () => {
  const contentLayer = (
    <ParallaxLayer imageUrl={swampLayers[0]} layerNumber={0}>
      <div className=" flex items-center justify-center w-full h-full text-white">
        <div className=" h-[300px] w-[500px] bg-cyan-800 rounded-2xl flex items-center justify-center">
          Dooooooop
        </div>
      </div>
    </ParallaxLayer>
  );
  const otherSwampLayers = swampLayers
    .filter((element, index) => index > 0)
    .map((imageUrl, index) => (
      <ParallaxLayer
        layerNumber={(index + 1) * -1}
        imageUrl={imageUrl}
        key={index + 1}
      />
    ));
  const swamp = [contentLayer, ...otherSwampLayers];

  return (
    <ParallaxContainer>
      <ParallaxGroup width="120vw">{swamp}</ParallaxGroup>
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
