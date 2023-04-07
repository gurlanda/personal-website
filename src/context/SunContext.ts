import React from 'react';

type Point = [number, number];

export class SunContextState {
  private _targetPosition: Point;
  private _targetDimensions: Point;

  constructor(
    targetPosition: Point = [0, 0],
    targetDimensions: Point = [0, 0]
  ) {
    this._targetDimensions = targetDimensions;
    this._targetPosition = targetPosition;
  }

  clone(): SunContextState {
    return new SunContextState(this._targetPosition, this._targetDimensions);
  }

  // Getters
  get targetLeft(): number {
    return this._targetPosition[0];
  }

  get targetTop(): number {
    return this._targetPosition[1];
  }

  get targetWidth(): number {
    return this._targetDimensions[0];
  }

  get targetHeight(): number {
    return this._targetDimensions[1];
  }

  get targetPosition(): Point {
    return [...this._targetPosition];
  }

  get targetDimensions(): Point {
    return [...this._targetDimensions];
  }

  // Setters
  set targetLeft(newLeft: number) {
    this._targetPosition[0] = newLeft;
  }

  set targetTop(newTop: number) {
    this._targetPosition[0] = newTop;
  }

  set targetWidth(newWidth: number) {
    this._targetDimensions[0] = newWidth;
  }

  set targetHeight(newHeight: number) {
    this._targetDimensions[0] = newHeight;
  }

  set targetPosition(newPosition: Point) {
    this._targetPosition = [...newPosition];
  }

  set targetDimensions(newDimensions: Point) {
    this._targetDimensions = [...newDimensions];
  }
}

export interface SunContextInterface {
  state: SunContextState;
  getTargetPosition(): Point;
  getTargetDimensions(): Point;
  setTargetPosition(position: Point): void;
  setTargetDimensions(dimensions: Point): void;
}

const SunContext = React.createContext<SunContextInterface | null>(null);

export default SunContext;
