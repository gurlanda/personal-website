import React from 'react';

import BrandonItem from './BrandonItem';

const Projects: React.FC<{}> = () => {
  return (
    <section
      id="projects"
      className="relative z-20 w-[70vw] h-[120vh] font-roboto text-yellow-900 flex flex-col"
    >
      <h2 className="text-6xl mb-7">Featured Projects</h2>
      <BrandonItem />
    </section>
  );
};

export default Projects;
