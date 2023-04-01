import React from 'react';
import HoverEffect from '../../../components/HoverEffect';

const SkillsBackgroundIcon: React.FC<{}> = () => {
  return (
    <HoverEffect>
      <span className="text-orange-800 text-opacity-[0.25]">
        {'<'}
        <span className="text-orange-700 text-opacity-[0.17]">{'/'}</span>
        {'>'}
      </span>
    </HoverEffect>
  );
};

export default SkillsBackgroundIcon;
