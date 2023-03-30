import React, { ReactNode } from 'react';
import Keyframe from './Keyframe';

const HoverIcon: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        animationName: 'float',
        animationDuration: '1.5s',
        animationTimingFunction: 'ease-in-out',
        animationDirection: 'alternate',
        animationIterationCount: 'infinite',
      }}
    >
      <Keyframe
        name="float"
        animationProperties={{
          from: { transform: 'translateY(0px)' },
          to: { transform: 'translateY(-10px)' },
        }}
      />

      {children}
    </div>
  );
};

export default HoverIcon;
