import React from 'react';

const Footer: React.FC<{}> = () => {
  return (
    <footer className="relative z-20 w-full h-[10vh] min-h-[80px] bg-yellow-900 saturate-50 flex justify-center items-center font-roboto font-extralight text-slate-100">
      <span className="text-center">
        Website designed and created by{' '}
        <a
          href="https://www.linkedin.com/in/gamliel-urlanda/"
          target="_blank"
          className=" underline underline-offset-2"
        >
          Gam Urlanda.{' '}
          <i className="fa-solid fa-up-right-from-square text-sm underline underline-offset-2" />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
