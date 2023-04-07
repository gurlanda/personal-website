import React from 'react';
import SectionContainer from '../../../components/SectionContainer';
import ContactForm from './ContactForm';
import SocialMediaLinks from './SocialMediaLinks';

const Contact: React.FC<{}> = () => {
  return (
    <SectionContainer>
      <div
        className="relative w-full max-w-[900px] px-5 pb-[20vh] flex flex-col items-center gap-5 font-thin text-xl text-yellow-900"
        id="contact"
      >
        <ContactForm />
        <SocialMediaLinks />
      </div>
    </SectionContainer>
  );
};

export default Contact;
