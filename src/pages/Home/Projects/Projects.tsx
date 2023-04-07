import React from 'react';
import SectionContainer from '../../../components/SectionContainer';
import BrandonItem from './BrandonItem';

const Projects: React.FC<{}> = () => {
  return (
    <SectionContainer>
      <section
        id="projects"
        className="w-full max-w-[900px] px-5 xs:px-10 font-roboto flex flex-col text-yellow-900"
      >
        <h2 className="text-6xl mb-7">Featured Projects</h2>
        <BrandonItem />
      </section>
    </SectionContainer>
  );
};

export default Projects;
