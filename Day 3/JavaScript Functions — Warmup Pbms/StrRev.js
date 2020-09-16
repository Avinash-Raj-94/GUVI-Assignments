var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   // your code here  
  var a = s.split('').reverse().join('');
  return a;
}