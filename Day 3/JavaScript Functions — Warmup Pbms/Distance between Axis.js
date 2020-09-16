function getDistance(x1, y1, x2, y2)
{var x= x2-x1;
var y= y2-y1;
var dis= Math.pow(x,2)+ Math.pow(y,2);
//console.log(dis);
 return dis;
}
console.log(getDistance(100, 100, 400, 300));