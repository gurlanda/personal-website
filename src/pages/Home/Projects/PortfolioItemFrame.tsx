import React from 'react';

const PortfolioItemFrame: React.FC<{
  href: string;
  header: string | React.ReactNode;
  technologies: string | React.ReactNode;
  children: React.ReactNode;
}> = ({ href, header, technologies, children }) => {
  return (
    <section className="group">
      <a
        href={href}
        target="_blank"
        className="relative block w-full h-[70vh] overflow-hidden rounded-2xl z-30 
        border-[3px] border-yellow-800 border-opacity-80
        "
      >
        {children}
      </a>
      <div className="flex flex-col">
        <h3 className="text-2xl font-light my-5 group-hover:underline">
          <a href={href} target="_blank">
            {header}
          </a>
        </h3>
        <p className="text-2xl font-light">{technologies}</p>
      </div>
    </section>
  );
};

export default PortfolioItemFrame;
