import React from 'react';
import heroVideo from '../../../assets/vid/hero-nobars-noaudio.mp4';
import PortfolioItemFrame from './PortfolioItemFrame';

const Video: React.FC<{}> = () => {
  return (
    <div className="relative h-full w-full">
      <video
        className="h-full max-w-none absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div
        className="
        absolute left-1/2 [transform:translate(-50%)] bottom-[8vh]
        flex flex-col justify-end items-center
        font-ibm-plex-serif text-white [text-shadow:0_0_20px_hsl(0,0%,0%,0.75)]"
      >
        <h1 className="text-4xl lg:text-5xl 2xl:text-6xl leading-[2.5rem]">
          Brandon
        </h1>
        <h2 className="text-5xl 2xs:text-6xl lg:text-7xl 2xl:text-8xl leading-[2.5rem]">
          Victoriano
        </h2>
      </div>
    </div>
  );
};

const Header: React.FC<{}> = () => {
  return (
    <>
      Porfolio for filmmaker Brandon Victoriano{' '}
      <i className="fa-solid fa-up-right-from-square text-xl align-text-top" />
    </>
  );
};

const BrandonItem: React.FC<{}> = () => {
  return (
    <PortfolioItemFrame
      href="https://brandonvictoriano.com"
      header={<Header />}
    >
      <Video />
    </PortfolioItemFrame>
  );
};

export default BrandonItem;
