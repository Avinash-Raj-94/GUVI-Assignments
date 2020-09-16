var checkPalindrome=function(str) {
  var str1 = str.split('').reverse().join('');
  if(str === str1){
	  console.log("Palindrome");
  }else{
  console.log("Not Palindrome");
  }
}
var str= "avi";
checkPalindrome(str);