import React from 'react';
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import About from './About';
import Contact from './Contact/Contact';
import Footer from './Footer';

const Home: React.FC<{}> = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full font-roboto overflow-clip bg-yellow-50">
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
