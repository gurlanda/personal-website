import React from 'react';
import HoverEffect from '../../components/HoverEffect';

const CircleIcon: React.FC<{ iconClassNames: string; href: string }> = ({
  iconClassNames,
  href,
}) => {
  return (
    <HoverEffect>
      <a
        href={href}
        target="_blank"
        className={`rounded-xl p-5 w-40
        flex justify-center items-center bg-yellow-900 hover:bg-yellow-800 active:bg-yellow-700 text-yellow-50 text-6xl`}
      >
        <i className={`${iconClassNames} text-center align-middle `} />
      </a>
    </HoverEffect>
  );
};

const Contact: React.FC<{}> = () => {
  const inputFieldClassNames =
    'border-[1px] border-yellow-800 border-opacity-50 bg-[rgb(254,253,241)] placeholder-yellow-900 placeholder-opacity-50 rounded-lg py-4 px-6 w-full';
  const buttonBackgroundClassNames =
    'bg-yellow-900 hover:bg-yellow-800 active:bg-yellow-700';
  return (
    <div
      id="contact"
      className="relative z-20 min-h-screen w-screen pb-36 flex justify-center font-thin text-xl bg-yellow text-yellow-900"
    >
      <div className="flex flex-col items-center gap-5 h-full w-[40%]">
        <form
          className="flex flex-col items-center gap-5 h-full w-full"
          id="fs-frm"
          name="simple-contact-form"
          acceptCharset="utf-8"
          action="https://formspree.io/f/xgebnqjv"
          method="post"
        >
          <div className="w-full flex justify-start items-center mb-2">
            <h2 className="font-normal text-6xl">Get in touch!</h2>
          </div>
          <fieldset
            id="fs-frm-inputs"
            className="flex flex-col gap-5 items-center w-full"
          >
            <input
              type="text"
              name="Sender's name"
              id="full-name"
              placeholder="Name..."
              required
              className={inputFieldClassNames}
            />
            <input
              type="email"
              name="Sender's email"
              id="email-address"
              placeholder="Email address..."
              required
              className={inputFieldClassNames}
            />
            <textarea
              rows={5}
              name="Message"
              id="message"
              placeholder="Message..."
              required
              className={inputFieldClassNames}
            ></textarea>
            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Contact Form Submission"
              className={inputFieldClassNames}
            />
          </fieldset>
          <div className="flex justify-end w-full">
            <button
              type="submit"
              className={`${buttonBackgroundClassNames} border-1 rounded-lg py-3 px-5 text-yellow-50`}
            >
              Submit
            </button>
          </div>
        </form>
        <section className="flex flex-col items-center gap-5 w-full h-[55vh] py-32">
          <div className="w-full flex flex-col gap-12 justify-start items-center">
            <h3 className="font-extralight text-5xl text-center">
              You can also find me in the usual places.
            </h3>
            <div className="w-full flex justify-evenly gap-5 text-yellow-50 text-3xl">
              <CircleIcon
                href="https://www.linkedin.com/in/gamliel-urlanda/"
                iconClassNames="fa-brands fa-linkedin-in"
              />
              <CircleIcon
                href="https://github.com/gurlanda/"
                iconClassNames="fa-brands fa-github"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
