function lessThan100(num1,num2) {
	var add= num1+num2;
	if(add> 100){
	return false;
	}else{
	return true;
	}
}
var res = lessThan100(22,15)
console.log(res);