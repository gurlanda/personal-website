import React from 'react';

const Home: React.FC<{}> = () => {
  return (
    <>
      <header>
        <nav>
          <a href="#proficiencies">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </nav>
        <h1>Gam Urlanda</h1>
      </header>

      <section id="tagline">
        <h2>No corners cut in growth and in craft</h2>
      </section>

      <section id="proficiencies">
        <h2>My Proficiencies</h2>
      </section>

      <section id="projects">
        <section id="brandon-portfolio">
          <h2>Porfolio for filmmaker Brandon Victoriano</h2>
        </section>
      </section>

      <section id="about">
        <h2>About me</h2>
        <p></p>
      </section>

      <section id="contact">
        <h2>Contact me!</h2>
      </section>

      <footer></footer>
    </>
  );
};

export default Home;
