import React from 'react';
import HoverEffect from '../../../components/HoverEffect';

const CircleIcon: React.FC<{ iconClassNames: string; href: string }> = ({
  iconClassNames,
  href,
}) => {
  return (
    <HoverEffect>
      <a
        href={href}
        target="_blank"
        className="p-5 w-2/3 flex justify-center items-center rounded-xl 
         bg-yellow-900 hover:bg-yellow-800 active:bg-yellow-700
         text-yellow-50 text-5xl
         xs:w-44 sm:w-48 sm:text-6xl"
      >
        <i className={`${iconClassNames} text-center align-middle `} />
      </a>
    </HoverEffect>
  );
};

// className={`rounded-xl p-5 w-40
//         flex justify-center items-center bg-yellow-900 hover:bg-yellow-800 active:bg-yellow-700 text-yellow-50 text-6xl`}

const SocialMediaLinks: React.FC<{}> = () => {
  return (
    <section className="pt-16 flex flex-col justify-center items-center gap-9 w-full">
      <h3 className="font-extralight text-4xl text-center">
        You can also find me in the usual places.
      </h3>
      <div
        className="w-full max-w-lg flex flex-col justify-evenly gap-5 
        xs:flex-row"
      >
        <CircleIcon
          href="https://www.linkedin.com/in/gamliel-urlanda/"
          iconClassNames="fa-brands fa-linkedin-in"
        />
        <CircleIcon
          href="https://github.com/gurlanda/"
          iconClassNames="fa-brands fa-github"
        />
      </div>
    </section>
  );
};

export default SocialMediaLinks;
