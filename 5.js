const checkPalindrome = (str) => {
  const check = str.split("").reverse().join("");
  if (str === check) {
    return "String merupakan Palindrome";
  } return "String bukan Palindrome";
};

console.log(checkPalindrome("hahah")) ;
