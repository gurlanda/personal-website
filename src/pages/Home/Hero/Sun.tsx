import React from 'react';
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

const Sun: React.FC<{
  top: number;
  left: number;
  mainDiskRadiusPx?: number;
}> = ({ top, left, mainDiskRadiusPx }) => {
  const imgSideWidthPx = 8000;
  const halfWidthPx = imgSideWidthPx / 2;
  const defaultMainDiskRadius = 200;
  const mainDiskRadius =
    mainDiskRadiusPx === undefined ? defaultMainDiskRadius : mainDiskRadiusPx;
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
          <circle cx={0} cy={0} r={mainDiskRadius} fill={sunColor} />
          {rayGroups.map((number, index) =>
            rayGroup(imgSideWidthPx, index * rayGroupAngularSpacingDegrees)
          )}
        </g>
      </svg>
    </div>
  );
};

export default Sun;
