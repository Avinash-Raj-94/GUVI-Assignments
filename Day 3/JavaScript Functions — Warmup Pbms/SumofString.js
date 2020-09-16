console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
  // your code here
  var a= s.split(',');
  var tot=0;
  for(i=0;i<a.length;i++){
  tot=tot + +a[i];
  }
  return tot;
}