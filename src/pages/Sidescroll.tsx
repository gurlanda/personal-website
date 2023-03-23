import React, { useState, useEffect, useRef } from 'react';
import lightBubbles from '../assets/img/backgrounds/pexels-1.jpg';
import darkBubbles from '../assets/img/backgrounds/pexels-3.jpg';
import brick from '../assets/img/backgrounds/pexels-2.jpg';

const Sidescroll: React.FC<{}> = () => {
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const midgroundDisplacementKey = useRef<string>('MidgroundDisplacement');
  const [midgroundLeft, setMidgroundLeft] = useState<number>(
    getLeftDisplacementFromLocalStorage(midgroundDisplacementKey.current)
  );

  const backgroundDisplacementKey = useRef<string>('BackgroundDisplacement');
  const [backgroundLeft, setBackgroundLeft] = useState<number>(
    getLeftDisplacementFromLocalStorage(backgroundDisplacementKey.current)
  );

  function getLeftDisplacementFromLocalStorage(key: string): number {
    const displacement = window.localStorage.getItem(key);

    if (displacement === null) {
      return 0;
    }

    return Number.parseInt(displacement);
  }

  function getLeftDisplacement(scrollSpeed: number): number {
    if (!imgContainerRef.current) {
      return 0;
    }

    // containerLeft: The off-screen displacement of the container
    const containerLeft = imgContainerRef.current.getBoundingClientRect().left;

    // imageLeft: The off-screen displacement of the image = containerLeft / 2;
    const imageLeft = -(containerLeft * scrollSpeed);
    return imageLeft;
  }

  useEffect(() => {
    function parallaxEffect(): void {
      const midgroundDisplacement = getLeftDisplacement(0.25);
      window.localStorage.setItem(
        midgroundDisplacementKey.current,
        midgroundDisplacement.toString()
      );
      setMidgroundLeft(midgroundDisplacement);

      const backgroundDisplacement = getLeftDisplacement(1 / 1.5);
      window.localStorage.setItem(
        backgroundDisplacementKey.current,
        backgroundDisplacement.toString()
      );
      setBackgroundLeft(backgroundDisplacement);
    }

    let enableListener: boolean = true;
    const timeoutMilliseconds: number = 0;
    function throttleListener() {
      if (!enableListener) {
        return;
      }

      enableListener = false;
      parallaxEffect();
      setTimeout(() => (enableListener = true), timeoutMilliseconds);
    }

    // document.addEventListener('scroll', throttleListener);
  }, []);

  return (
    <div
      className="parallax "
      ref={imgContainerRef}
      // style={{
      //   perspective: '200px',
      // }}
    >
      <div
        className="parallax__layer--base parallax__layer h-[50vh] w-[200vw] bottom-0"
        // style={{
        // transform: `translateX(${midgroundLeft}px)`,
        //   transform: 'translateZ(50px)',
        // }}
      >
        <img src={brick} alt="" className="h-full w-full" />
        {/* <div>Foreground</div> */}
      </div>

      <div
        className="parallax__layer parallax__layer--midground  h-[66vh] w-[200vw] -z-10 bottom-0"
        // style={{
        //   transform: `translateX(${midgroundLeft}px)`,
        //   transform: 'translateZ(100px)',
        // }}
      >
        <img src={lightBubbles} alt="" className=" h-full w-full" />
        {/* <div>Background</div> */}
      </div>

      <div
        className="parallax__layer parallax__layer--back  h-[100vh] w-[200vw] -z-20 bottom-0"
        style={
          {
            // transform: `translateX(${backgroundLeft}px)`,
          }
        }
      >
        <img src={darkBubbles} alt="" className=" h-full w-full" />
      </div>
    </div>
  );
};

export default Sidescroll;
