function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase for accurate comparison
  const cleanStr = str.replace(/[\W_]+/g, "").toLowerCase();
  
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i].match(/[a-zA-Z0-9]/)) {
      reversed += str[i];
    }
  }
  
  // Remove non-alphanumeric characters from the reversed string and convert to lowercase
  const cleanReversed = reversed.replace(/[\W_]+/g, "").toLowerCase();
  
  return cleanStr === cleanReversed;
}



palindrome("eye");
