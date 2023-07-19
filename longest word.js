function findLongestWord(inputString) {
    // Split the input string into words
    let words = inputString.split(' ');
  
    // Initialize variables to keep track of the longest word and its length
    let longestWord = '';
    let longestLength = 0;
  
    // Iterate through the words to find the longest one
    for (let i = 0; i < words.length; i++) {
      // Remove any non-alphanumeric characters to get the actual word length
      let word = words[i].replace(/[^a-zA-Z0-9]/g, '');
      let wordLength = word.length;
  
      // Check if the current word is longer than the previous longest word
      if (wordLength > longestLength) {
        longestWord = word;
        longestLength = wordLength;
      }
    }
  
    return longestWord;
  }
  
  // Example usage:
  let inputString = "My name is ankit jain & i'm from morena";
  let result = findLongestWord(inputString);
  console.log("The longest word is:", result);
  