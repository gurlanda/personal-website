import React, { useState } from 'react';
import SunContext, { SunContextState } from './SunContext';

type Point = [number, number];

const SunContextProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<SunContextState>(new SunContextState());

  function getTargetPosition(): Point {
    return state.targetPosition;
  }

  function getTargetDimensions(): Point {
    return state.targetDimensions;
  }

  function setTargetPosition(position: Point): void {
    setState((previousState) => {
      const newState = previousState.clone();
      newState.targetPosition = [...position];
      return newState;
    });
  }

  function setTargetDimensions(dimensions: Point): void {
    setState((previousState) => {
      const newState = previousState.clone();
      newState.targetDimensions = [...dimensions];
      return newState;
    });
  }

  return (
    <SunContext.Provider
      value={{
        state,
        getTargetDimensions,
        getTargetPosition,
        setTargetDimensions,
        setTargetPosition,
      }}
    >
      {children}
    </SunContext.Provider>
  );
};

export default SunContextProvider;
