import React from 'react';
import Hero from './Hero/Hero';
import Tagline from './Tagline';
import Proficiencies from './Proficiencies';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const Home: React.FC<{}> = () => {
  return (
    <div className="h-full font-roboto">
      <Hero />
      <Proficiencies />
      {/* <Tagline />
      <Projects />
      <About />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default Home;
