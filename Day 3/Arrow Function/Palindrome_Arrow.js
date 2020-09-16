var isPalindrome = stringToTest => {
  var stringTransformed = stringToTest
      .replace(/[^\w]/gi, '') // replace all non-letter characters
      .toLowerCase(); // make all characters lower cased

  return stringTransformed === stringTransformed.split('').reverse().join('');
}
console.log(isPalindrome("Malayalam"));