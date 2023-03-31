import React from 'react';
import HoverEffect from '../../../components/HoverEffect';

const SkillsBackgroundIcon: React.FC<{}> = () => {
  return (
    <HoverEffect>
      <span className="text-slate-300">
        {'<'}
        <span className="text-slate-200">{'/'}</span>
        {'>'}
      </span>
    </HoverEffect>
  );
};

export default SkillsBackgroundIcon;
