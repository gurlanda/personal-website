function randomKey(numberOfDigits: number = 5): string {
  const output = '';
  for (let i = 0; i < numberOfDigits; i++) {
    const digit = Math.floor(Math.random() * 10);
    output.concat(digit.toString());
  }

  return output;
}

export default randomKey;
