function isSameLength(word1, word2){
 // your code here
 var a= word1.split('');
 var b= word2.split('');
 var c=0,c1=0;
 if(a.length == b.length)
{
return true;
} else{
return false;
}
}
var lenghtarr = isSameLength('GUVIN', 'GEEK')
console.log(lenghtarr);
