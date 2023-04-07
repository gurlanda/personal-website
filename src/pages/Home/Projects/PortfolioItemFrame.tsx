import React from 'react';

const PortfolioItemFrame: React.FC<{
  href: string;
  header: string | React.ReactNode;
  children: React.ReactNode;
}> = ({ href, header, children }) => {
  return (
    <section className="group">
      <a
        href={href}
        target="_blank"
        className="relative block w-full h-[70vh] overflow-hidden rounded-2xl border z-30 border-yellow-800 border-opacity-50 "
      >
        {children}
      </a>
      <h3 className="text-2xl font-light my-5 group-hover:underline">
        <a href={href} target="_blank">
          {header}
        </a>
      </h3>
    </section>
  );
};

export default PortfolioItemFrame;
