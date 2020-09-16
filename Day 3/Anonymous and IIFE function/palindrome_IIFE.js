(function(str){
  var str1 = str.split('').reverse().join('');
  if(str.ignoreCase === str1.ignoreCase){
	  console.log("Palindrome");
  }else{
  console.log("Not Palindrome");
  }
})(str="Malayalam");