import React from 'react';
import HoverEffect from './HoverEffect';
import * as TsxLogos from '../assets/img/logos/tsx/tsxLogos';

const HoverIconExperiment: React.FC<{}> = () => {
  const counter: number[] = [];
  for (let i = 0; i < 16; i++) {
    counter.push(i);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="grid grid-cols-4 gap-10">
        {TsxLogos.asArray.map((ImgComponent) => (
          <HoverEffect>
            <ImgComponent.icon />
            <h2 className="text-center">{ImgComponent.text}</h2>
          </HoverEffect>
        ))}
      </div>
    </div>
  );
};

export default HoverIconExperiment;
