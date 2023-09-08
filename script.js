function firstNonRepeatedChar(str) {
 // Write your code here
	  const charCount = {};

  // Iterate through the string to count character occurrences
  for (const char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Find the first character with a count of 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Return null if there are no non-repeated characters
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
