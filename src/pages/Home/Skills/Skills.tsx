import React from 'react';
import HoverEffect from '../../../components/HoverEffect';
import * as TsxLogos from '../../../assets/img/logos/tsx/tsxLogos';

const SkillsGroup: React.FC<{
  children: React.ReactNode;
  logoArray: typeof TsxLogos.asArray;
}> = ({ children, logoArray }) => {
  return (
    <section className="flex flex-col gap-9">
      <p>{children}</p>
      <div
        className="grid max-xs:grid-cols-2 gap-3 
      xs:grid-cols-3 xs:gap-6
      ms:gap-10"
      >
        {logoArray.map((Logo, index) => (
          <HoverEffect key={index}>
            <Logo.icon />
            <p className="font-extralight">{Logo.text}</p>
          </HoverEffect>
        ))}
      </div>
    </section>
  );
};

const Skills: React.FC<{}> = () => {
  const tsxLogosObject = TsxLogos.asObject;

  const favoriteTechnologies = [
    tsxLogosObject.reactjs,
    tsxLogosObject.typescript,
    tsxLogosObject.tailwindcss,
  ];

  const otherProficiencies = [
    tsxLogosObject.html5,
    tsxLogosObject.css3,
    tsxLogosObject.sass,
    tsxLogosObject.js,
    tsxLogosObject.nodejs,
    tsxLogosObject.mongodb,
    tsxLogosObject.python,
  ];

  const devProficiencies = [
    tsxLogosObject.npmjs,
    tsxLogosObject.github,
    tsxLogosObject.git,
  ];

  return (
    <div className="h-full w-full relative flex justify-center text-yellow-900 pt-32">
      <section
        id="proficiencies"
        className="relative px-5 flex flex-col gap-20 font-light text-2xl z-50
        
        xs:px-10"
      >
        <section className="flex flex-col gap-3">
          <h2 className="font-normal text-6xl">My Skills</h2>
          <p>
            These are the skills I've learned so far, and I'm always working{' '}
            <br />
            to add more.
          </p>
        </section>

        <SkillsGroup logoArray={favoriteTechnologies}>
          <>
            These are my <strong>favorite technologies</strong> for building web
            apps...
          </>
        </SkillsGroup>

        <SkillsGroup logoArray={otherProficiencies}>
          <>...But I'm also confident with these technologies.</>
        </SkillsGroup>

        <SkillsGroup logoArray={devProficiencies}>
          <>I'm also proficient with the following dev tools.</>
        </SkillsGroup>
      </section>
    </div>
  );
};

export default Skills;
