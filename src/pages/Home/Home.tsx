import React from 'react';
import Hero from './Hero/Hero';
import Tagline from './Tagline';
import Proficiencies from './Proficiencies';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import BGHoverIconExperiment from '../../components/BGHoverIconExperiment';

const Home: React.FC<{}> = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full font-roboto">
      <Hero />
      <Proficiencies />
      <BGHoverIconExperiment />
      {/* <Tagline />
      <Projects />
      <About />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default Home;
