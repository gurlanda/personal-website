import React from 'react';
import HoverEffect from '../../../components/HoverEffect';
import * as TsxLogos from '../../../assets/img/logos/tsx/tsxLogos';
import IconBackground from '../../../components/IconBackground';
import SkillsBackgroundIcon from './SkillsBackgroundIcon';

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
    <section className="h-full w-full relative flex justify-center text-slate-800">
      <div
        id="proficiencies"
        className="relative flex flex-col gap-24 pt-48 pb-48 px-40 font-thin text-2xl z-50"
      >
        <section className="flex flex-col gap-3">
          <h2 className="font-normal text-6xl">My Skills</h2>
          <p>
            These are the skills I've learned so far, and I'm always working{' '}
            <br />
            to add more.
          </p>
        </section>

        <section className="flex flex-col gap-6">
          <p>
            These are my <strong>favorite technologies</strong> for building web
            apps...
          </p>
          <div className="grid grid-cols-3 gap-10">
            {favoriteTechnologies.map((Logo, index) => (
              <HoverEffect key={index}>
                <Logo.icon />
                <p>{Logo.text}</p>
              </HoverEffect>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <p>...But I'm also confident with these technologies.</p>
          <div className="grid grid-cols-4 gap-10">
            {otherProficiencies.map((Logo, index) => (
              <HoverEffect key={index}>
                <Logo.icon />
                <p>{Logo.text}</p>
              </HoverEffect>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <p>I'm also proficient with the following dev tools.</p>
          <div className="grid grid-cols-3 gap-10">
            {devProficiencies.map((Logo, index) => (
              <HoverEffect key={index}>
                <Logo.icon />
                <p>{Logo.text}</p>
              </HoverEffect>
            ))}
          </div>
        </section>
      </div>
      {/* <IconBackground>
        <SkillsBackgroundIcon />
      </IconBackground> */}
    </section>
  );
};

export default Skills;
