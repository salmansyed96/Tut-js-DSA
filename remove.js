function removeDuplicates(str) {
    let uniqueStr = "";
  
    for (let char of str) {
      if (uniqueStr.indexOf(char) === -1) {
        uniqueStr += char;
      }
    }
  
    return uniqueStr;
  }
  
  const inputString = "hello";
  const result = removeDuplicates(inputString);
  console.log(result); // Output: "helo"
  