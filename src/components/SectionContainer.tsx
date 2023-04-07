import React, { ReactNode } from 'react';

const SectionContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full pt-[20vh] relative z-20 flex justify-center">
      {children}
    </div>
  );
};

export default SectionContainer;
