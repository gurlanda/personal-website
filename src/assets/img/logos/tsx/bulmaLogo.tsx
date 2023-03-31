import React from 'react';

function Icon() {
  return (
    <div className=" flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="64"
        fill="none"
        viewBox="0 0 42 64"
      >
        <path
          fill="#00D1B2"
          fillRule="evenodd"
          d="M0 44l3.818-28L19.091 0l19.09 20-11.454 12L42 48 19.09 64 0 44z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

export default { icon: Icon, text: 'Bulma' };
