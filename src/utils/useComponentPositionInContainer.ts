import React, { useState, useEffect } from 'react';

function useComponentPositionInContainer(
  element: React.RefObject<HTMLElement>
): [number, number] {
  const [left, setLeft] = useState<number>(0);
  const [top, setTop] = useState<number>(0);

  useEffect(() => {
    if (!element.current) {
      return;
    }

    const boundingClientRect = element.current.getBoundingClientRect();
    setLeft(boundingClientRect.left);
    setTop(boundingClientRect.top);
  }, []);

  return [left, top];
}

export default useComponentPositionInContainer;
