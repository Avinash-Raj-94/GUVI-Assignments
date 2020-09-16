(function(array){
        var uniqueArray = [];
        
        // Loop through array values
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        //return uniqueArray;
		console.log(uniqueArray);
    }
	)(names=[1,2,3,4,1,3,5]);