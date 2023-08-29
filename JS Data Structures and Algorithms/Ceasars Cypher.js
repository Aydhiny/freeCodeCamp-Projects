function rot13(str) {
  // Initialize an empty string to store the decoded result
  let decodedStr = "";

  // Iterate through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Get the ASCII code of the current character
    const charCode = str.charCodeAt(i);

    // Check if the character is uppercase letter A-Z
    if (charCode >= 65 && charCode <= 90) {
      // Perform the ROT13 transformation by adding 13 and wrapping around the alphabet
      const decodedCharCode = ((charCode - 65 + 13) % 26) + 65;

      // Convert the ASCII code back to a character and append to the result
      decodedStr += String.fromCharCode(decodedCharCode);
    } else {
      // If the character is not an uppercase letter, simply append it to the result
      decodedStr += str.charAt(i);
    }
  }

  return decodedStr;
}

rot13("SERR PBQR PNZC");
