import React from 'react';

const Contact: React.FC<{}> = () => {
  const inputFieldClassNames =
    'border-[1px] border-yellow-800 border-opacity-50 bg-[rgb(254,253,241)] placeholder-yellow-900 placeholder-opacity-50 rounded-lg py-4 px-6 w-full';
  return (
    <div
      id="contact"
      className="relative z-20 h-[85vh] w-screen flex justify-center font-thin text-xl bg-yellow text-yellow-900"
    >
      <form
        className="flex flex-col items-center gap-5 h-full w-[40%]"
        id="fs-frm"
        name="simple-contact-form"
        acceptCharset="utf-8"
        // action="https://formspree.io/f/xoqzdyyg"
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
            className="border-1 bg-yellow-900 hover:bg-yellow-800 active:bg-yellow-700 rounded-lg py-3 px-5 text-yellow-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
