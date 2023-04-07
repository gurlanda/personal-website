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
        className={`rounded-xl p-5 w-40
        flex justify-center items-center bg-yellow-900 hover:bg-yellow-800 active:bg-yellow-700 text-yellow-50 text-6xl`}
      >
        <i className={`${iconClassNames} text-center align-middle `} />
      </a>
    </HoverEffect>
  );
};

const SocialMediaLinks: React.FC<{}> = () => {
  return (
    <section className="flex flex-col items-center gap-5 w-full h-[55vh] py-32">
      <div className="w-full flex flex-col gap-12 justify-start items-center">
        <h3 className="font-extralight text-5xl text-center">
          You can also find me in the usual places.
        </h3>
        <div className="w-full flex justify-evenly gap-5 text-yellow-50 text-3xl">
          <CircleIcon
            href="https://www.linkedin.com/in/gamliel-urlanda/"
            iconClassNames="fa-brands fa-linkedin-in"
          />
          <CircleIcon
            href="https://github.com/gurlanda/"
            iconClassNames="fa-brands fa-github"
          />
        </div>
      </div>
    </section>
  );
};

export default SocialMediaLinks;
