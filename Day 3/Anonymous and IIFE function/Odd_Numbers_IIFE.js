var arr=[1,2,3,4,5];

(function(arr){
	for( var i=1;i<arr.length;i++){
	if(arr[i]%2==1){
	console.log(arr[i]);
	}
	}

})(arr);