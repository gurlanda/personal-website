import React from 'react';
import SectionContainer from '../../../components/SectionContainer';
import BrandonItem from './BrandonItem';

const Projects: React.FC<{}> = () => {
  return (
    <SectionContainer>
      <section
        id="projects"
        className="w-full max-w-[900px] px-5 xs:px-10 font-roboto text-yellow-900 flex flex-col gap-10"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-6xl ">Featured Projects</h2>
          <h3 className="text-[1.5rem] font-light">
            All my projects implement responsive design. Test them out!
          </h3>
        </div>
        <div className="flex flex-col gap-20">
          <BrandonItem />
          <div className="flex flex-col gap-8">
            <h3 className="text-[2.5rem] leading-4 font-[500]">This Website</h3>
            <p className="text-2xl font-light">
              <strong className="font-[500]">Technologies used:</strong> Created
              with React, TypeScript, TailwindCSS. Hosted using GitHub Pages and
              Google Domains.
            </p>
          </div>
        </div>
      </section>
    </SectionContainer>
  );
};

export default Projects;
