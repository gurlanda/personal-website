import React from 'react';

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="relative z-20 text-yellow-900 w-[50vw] min-h-screen my-32 flex flex-col gap-6 font-light text-xl pb-24 leading-8"
    >
      <div className="flex justify-start items-center gap-24 pb-6">
        <h2 className="text-6xl font-normal">About me</h2>
        {/* <div className="rounded-full aspect-square w-[18vw] bg-yellow-500"></div> */}
      </div>
      <p>
        Hi, I'm Gam Urlanda, a front-end software developer based in the San
        Francisco Bay Area. With a degree in Mathematics from the University of
        California, Santa Cruz, I bring a unique blend of technical and
        interpersonal skills to the table.
      </p>
      <p>
        My training in mathematics has allowed me to quickly and deeply learn
        advanced technical concepts, while my experience in event organization
        and design in community-serving roles has given me an edge in
        empathizing with users when designing and implementing user interfaces.
        I'm excited to bring this skillset to a front-end developer position
        where collaboration, innovation, and user-centered design are valued.
      </p>
      <p>
        When I'm not coding, I indulge my passion for mathematics, particularly
        exploring the theoretical foundations of machine learning. I'm also an
        avid performer and have been singing, playing the piano, and
        entertaining audiences for over 20 years. Lately, I've been pushing
        myself to take song requests and play them on-the-fly without sheet
        music.
      </p>
      <p>
        I'm excited about the opportunity to bring my technical expertise and
        creativity to a front-end developer position, and I'm eager to explore
        how my skills and experience can contribute to your team. If you're
        interested in learning more about my work or discussing potential
        collaboration, please don't hesitate to reach out. I look forward to
        hearing from you soon!
      </p>
    </section>
  );
};

export default About;
