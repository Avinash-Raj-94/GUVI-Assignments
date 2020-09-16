function powersOfTwo(n){
  var res;
  var tot="";
  for(i=0;i<=n;i++){
  res= Math.pow(2,i);
  if(i< n){
  tot=tot+ res+",";
  }else{
  tot=tot+res;
  }
  //console.log(tot.trim());
  }
  console.log(tot);
  //return res;
  
}

var power= powersOfTwo(2);