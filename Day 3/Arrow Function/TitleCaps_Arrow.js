var Strg= "my name is AviNash";

var CapStr= (str)=> str[0].toUpperCase()+str.slice(1).toLowerCase();
var CapWor =(str)=> str.split(' '). map(CapStr).join(' ');
console.log(CapWor(Strg));