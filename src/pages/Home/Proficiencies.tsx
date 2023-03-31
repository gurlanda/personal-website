import React from 'react';
import HoverIcon from '../../components/HoverIcon';
import * as TsxLogos from '../../assets/img/logos/tsx/tsxLogos';

const Proficiencies: React.FC<{}> = () => {
  const tsxLogosObject = TsxLogos.asObject;

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
    <section
      id="proficiencies"
      className="h-screen w-screen flex justify-center text-slate-800"
    >
      <div className="flex flex-col gap-24 pt-28 pb-36 px-40 font-thin text-2xl">
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
          <div className="flex justify-center items-center gap-6">
            <HoverIcon>
              <TsxLogos.asObject.reactjs.icon />
              <p>{TsxLogos.asObject.reactjs.text}</p>
            </HoverIcon>
            <span className="fa-solid fa-plus text-4xl"></span>
            <HoverIcon>
              <TsxLogos.asObject.typescript.icon />
              <p>{TsxLogos.asObject.typescript.text}</p>
            </HoverIcon>
            <span className="fa-solid fa-plus text-4xl"></span>
            <HoverIcon>
              <TsxLogos.asObject.tailwindcss.icon />
              <p>{TsxLogos.asObject.tailwindcss.text}</p>
            </HoverIcon>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <p>...But I'm also confident with these technologies.</p>
          <div className="grid grid-cols-4 justify-center gap-10">
            {otherProficiencies.map((Logo, index) => (
              <HoverIcon key={index}>
                <Logo.icon />
                <p>{Logo.text}</p>
              </HoverIcon>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <p>I'm also proficient with the following dev tools.</p>
          <div className="grid grid-cols-3 justify-center gap-10">
            {devProficiencies.map((Logo, index) => (
              <HoverIcon key={index}>
                <Logo.icon />
                <p>{Logo.text}</p>
              </HoverIcon>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Proficiencies;
