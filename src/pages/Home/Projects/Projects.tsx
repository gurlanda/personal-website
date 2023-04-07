import React from 'react';

import BrandonItem from './BrandonItem';

const Projects: React.FC<{}> = () => {
  return (
    <div className="h-[120vh] w-screen py-[20vh] relative z-20 flex justify-center text-yellow-900">
      <section
        id="projects"
        className="h-screen w-full max-w-[900px] px-5 xs:px-10 font-roboto flex flex-col"
      >
        <h2 className="text-6xl mb-7">Featured Projects</h2>
        <BrandonItem />
      </section>
    </div>
  );
};

export default Projects;
