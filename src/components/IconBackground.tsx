import React, { useRef, useState, useEffect } from 'react';

const PositionedIcon: React.FC<{
  x: number;
  y: number;
  iconSize: number;
  children: React.ReactNode;
}> = ({ x, y, iconSize, children }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: y - iconSize / 2,
        left: x - iconSize / 2,
        fontSize: `${iconSize}px`,
      }}
    >
      {children}
    </div>
  );
};

const IconBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    setContainerHeight(containerRef.current.offsetHeight);
    setContainerWidth(containerRef.current.offsetWidth);
    console.log(containerHeight);
    console.log(containerWidth);
  }, []);

  function iconGrid(
    spacingPx: number,
    containerWidth: number,
    containerHeight: number
  ): React.ReactNode[] {
    function iconSizePx(x: number, y: number): number {
      const originX = containerWidth / 2;
      const originY = containerHeight / 2;

      const magnitudeX = originX - x;
      const magnitudeY = originY - y;

      function magnitude(x: number, y: number): number {
        return Math.sqrt(x * x + y * y);
      }

      const distanceFromOrigin = magnitude(magnitudeX, magnitudeY);
      const maxDistance = magnitude(originX, originY);

      const percentageOfMaxDistance = distanceFromOrigin / maxDistance;
      const minSizePx = 15;
      const maxSizePx = 100;

      return (
        (maxSizePx - minSizePx) * Math.pow(percentageOfMaxDistance, 2.5) +
        minSizePx
      );
    }

    const verticalSpacingScale = Math.sqrt(3) / 2;
    const verticalSpacing = spacingPx * verticalSpacingScale;
    const horizontalSpacing = spacingPx;
    const output: React.ReactNode[] = [];
    for (
      let currentY = 0;
      currentY < containerHeight;
      currentY += verticalSpacing
    ) {
      for (
        let currentX = 0;
        currentX < containerWidth;
        currentX += horizontalSpacing
      ) {
        output.push(
          <PositionedIcon
            x={currentX}
            y={currentY}
            iconSize={iconSizePx(currentX, currentY)}
          >
            {children}
          </PositionedIcon>
        );
      }

      currentY += verticalSpacing;

      for (
        let currentX = horizontalSpacing / 2;
        currentX < containerWidth;
        currentX += horizontalSpacing
      ) {
        output.push(
          <PositionedIcon
            x={currentX}
            y={currentY}
            iconSize={iconSizePx(currentX, currentY)}
          >
            {children}
          </PositionedIcon>
        );
      }
    }

    return output;
  }

  return (
    <div
      className="w-full h-full absolute top-0 left-0 z-20"
      ref={containerRef}
    >
      {iconGrid(400, containerWidth, containerHeight)}
    </div>
  );
};

export default IconBackground;
