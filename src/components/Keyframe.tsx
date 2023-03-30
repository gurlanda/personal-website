import React, { CSSProperties } from 'react';

// This solution is based off a StackOverflow answer: https://stackoverflow.com/a/73550611/3204158

type Properties = CSSProperties | string;
type AnimationProperties = Record<string, Properties>;

function cssPropertiesObjectToCssRule(properties: Properties): string {
  if (typeof properties === 'string') {
    return properties;
  }

  function camelCaseToKebabCase(input: string): string {
    return input.replace(/A-Z/g, (match: string) => `-${match.toLowerCase()}`);
  }

  return Object.keys(properties).reduce((accumulator, key) => {
    const cssKey = camelCaseToKebabCase(key);
    const cssValue = (properties as any)[key].toString().replace("'", '');
    return `${accumulator}${cssKey}:${cssValue};`;
  }, '');
}

function getCssRules(animationProperties: AnimationProperties): string[] {
  return Object.entries(animationProperties).map(
    ([key, value]) => `${key} { ${cssPropertiesObjectToCssRule(value)} }`
  );
}

const Keyframe: React.FC<{
  name: string;
  animationProperties: AnimationProperties;
}> = ({ name, animationProperties }) => {
  return (
    <style>
      {`@keyframes ${name} {
        ${getCssRules(animationProperties).join('\n')}
      }`}
    </style>
  );
};

export default Keyframe;
