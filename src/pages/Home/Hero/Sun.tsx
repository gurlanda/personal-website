import React, { useContext, useEffect, useState } from 'react';
import useFullPageDimensions from '../../../hooks/useFullPageDimensions';
import SunContext from '../../../context/SunContext';
import Colors from '../../../utils/Colors';
import Keyframe from '../../../utils/Keyframe';

const sunColor = Colors.yellow[100];
const unitAngleDegrees = 3;

function polarPointToRectangularCoordinates(
  magnitudePx: number,
  angleDegrees: number
): string {
  function degreesToRadians(degrees: number): number {
    return (2 * Math.PI * degrees) / 360;
  }

  const angleRadians = degreesToRadians(angleDegrees);
  const x = magnitudePx * Math.cos(angleRadians);
  const y = magnitudePx * Math.sin(angleRadians);
  return `${x} ${y}`;
}

function circleSector(
  radiusPx: number,
  startingAngleDegrees: number,
  sweptAngleDegrees: number
) {
  const startingPointOnCircle = polarPointToRectangularCoordinates(
    radiusPx,
    startingAngleDegrees
  );
  const finalPointOnCircle = polarPointToRectangularCoordinates(
    radiusPx,
    startingAngleDegrees + sweptAngleDegrees
  );
  return (
    <path
      d={`M0 0 L${startingPointOnCircle} L${finalPointOnCircle} Z`}
      fill={sunColor}
    />
  );
}

function minorRay(radiusPx: number, startingAngleDegrees: number) {
  return circleSector(radiusPx, startingAngleDegrees, unitAngleDegrees);
}

function majorRay(radiusPx: number, startingAngleDegrees: number) {
  return circleSector(radiusPx, startingAngleDegrees, 2 * unitAngleDegrees);
}

function rayGroup(radiusPx: number, startingAngleDegrees: number) {
  return (
    <>
      {minorRay(radiusPx, startingAngleDegrees)}
      {majorRay(radiusPx, startingAngleDegrees + 2 * unitAngleDegrees)}
      {minorRay(radiusPx, startingAngleDegrees + 5 * unitAngleDegrees)}
    </>
  );
}

const Sun: React.FC<{}> = () => {
  const [pageWidth, pageHeight] = useFullPageDimensions();
  const sunContext = useContext(SunContext);
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [sunDiskRadiusPx, setSunDiskRadiusPx] = useState<number>(0);

  useEffect(() => {
    if (!sunContext) {
      return;
    }

    const [targetLeft, targetTop] = sunContext.getTargetPosition();
    const [targetWidth, targetHeight] = sunContext.getTargetDimensions();

    console.dir(sunContext.state);

    function getMiddlePx(offsetPx: number, sizePx: number): number {
      return offsetPx + sizePx * 0.5;
    }

    function chooseWidthScaleResponsively(): number {
      const windowWidth = window.innerWidth;
      const mlBreakpointPx = 896;
      if (windowWidth < mlBreakpointPx) {
        return 0.35;
      } else {
        return 0.43;
      }
    }

    const widthScale = chooseWidthScaleResponsively();

    setTop(getMiddlePx(targetTop, targetHeight));
    setLeft(getMiddlePx(targetLeft, targetWidth));
    setSunDiskRadiusPx(Math.min(targetWidth * widthScale, 250));
  }, [sunContext]);

  const imgSideWidthPx = pageHeight * 2;
  const halfWidthPx = imgSideWidthPx / 2;
  const defaultSunDiskRadiusPx = 200;
  const mainDiskRadiusPx =
    sunDiskRadiusPx === undefined ? defaultSunDiskRadiusPx : sunDiskRadiusPx;
  const center = `${halfWidthPx},${halfWidthPx}`;
  const rayGroupAngularSpacingDegrees = 15 * unitAngleDegrees;

  const rayGroups: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <div
      className="absolute z-10"
      style={{
        animationName: 'rotate',
        animationDuration: `100s`,
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        transformOrigin: 'center',
        top: top - halfWidthPx,
        left: left - halfWidthPx,
      }}
    >
      <Keyframe
        name="rotate"
        animationProperties={{
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={imgSideWidthPx}
        height={imgSideWidthPx}
      >
        <g transform={`translate(${center})`}>
          <circle cx={0} cy={0} r={mainDiskRadiusPx} fill={sunColor} />
          {rayGroups.map((number, index) =>
            rayGroup(imgSideWidthPx, index * rayGroupAngularSpacingDegrees)
          )}
        </g>
      </svg>
    </div>
  );
};

export default Sun;
