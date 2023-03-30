import React from 'react';
import TypescriptLogo from '../assets/img/logos/typescript-logo';
import HoverIcon from './HoverIcon';
import Keyframe from './Keyframe';

const HoverIconExperiment: React.FC<{}> = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <HoverIcon>
        <TypescriptLogo />
      </HoverIcon>
    </div>
  );
};

export default HoverIconExperiment;
