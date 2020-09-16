function isEven(num){
 // your code here
 if(typeof num == 'number'){
 if(num%2==0){
 return true;
 }else{
	 return false;
 }
 }else{
	 return -1;
}
}
var even = isEven("4");
console.log(even);