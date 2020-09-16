function getUnique(array){
        var uniqueArray = [];
        
        // Loop through array values
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    
    var names = [1,1,2,3,4,4,5,6,5,];
    var uniqueNames = getUnique(names);
    console.log(uniqueNames);