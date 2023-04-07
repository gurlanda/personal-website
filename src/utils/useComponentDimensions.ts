import React, { useState, useEffect } from 'react';

function useComponentDimensions(
  element: React.RefObject<HTMLElement>
): [number, number] {
  const [componentWidth, setComponentWidth] = useState<number>(0);
  const [componentHeight, setComponentHeight] = useState<number>(0);

  useEffect(() => {
    if (!element.current) {
      return;
    }

    setComponentWidth(element.current.offsetWidth);
    setComponentHeight(element.current.offsetHeight);
  }, []);

  return [componentWidth, componentHeight];
}

export default useComponentDimensions;
