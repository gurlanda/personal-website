import React, { ReactNode } from 'react';
import Keyframe from './Keyframe';

function randomDuration(): number {
  return Math.random() * 500 + 1400;
}

const HoverIcon: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        animationName: 'float',
        animationDuration: `${randomDuration()}ms`,
        animationTimingFunction: 'ease-in-out',
        animationDirection: 'alternate',
        animationIterationCount: 'infinite',
      }}
      className="hover:-translate-y-7 transition-all hover:[animation-play-state:paused]"
    >
      <Keyframe
        name="float"
        animationProperties={{
          from: { transform: 'translateY(0px)' },
          to: { transform: 'translateY(-5px)' },
        }}
      />

      {children}
    </div>
  );
};

export default HoverIcon;
