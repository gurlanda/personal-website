import React from 'react';
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import About from './About';
import Contact from './Contact/Contact';
import Footer from './Footer';
import Sun from './Hero/Sun';
import SunContextProvider from '../../context/SunContextProvider';

const Home: React.FC<{}> = () => {
  return (
    <SunContextProvider>
      <div className="flex flex-col justify-center items-center h-full font-roboto overflow-hidden bg-yellow-50 relative">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
        <div className="h-full w-full absolute top-0 left-0 overflow-hidden">
          <Sun />
        </div>
      </div>
    </SunContextProvider>
  );
};

export default Home;
