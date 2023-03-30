import React from 'react';
import Hero from './Hero';
import Tagline from './Tagline';
import Proficiencies from './Proficiencies';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const Home: React.FC<{}> = () => {
  return (
    <>
      <Hero />
      {/* <Tagline />
      <Proficiencies />
      <Projects />
      <About />
      <Contact />
      <Footer /> */}
    </>
  );
};

export default Home;
