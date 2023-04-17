export function capitalize(inputString: string): string {
  // split the input string into an array of words
  const words = inputString.split(' ');
  // iterate over each word in the array and capitalize the first letter
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  // join the capitalized words back into a string and return it
  return capitalizedWords.join(' ');
}
