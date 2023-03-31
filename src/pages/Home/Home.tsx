import React from 'react';
import Hero from './Hero/Hero';
import Tagline from './Tagline';
import Skills from './Skills/Skills';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const Home: React.FC<{}> = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full font-roboto">
      <Hero />
      <Skills />
      {/* <Tagline />
      <Projects />
      <About />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default Home;
