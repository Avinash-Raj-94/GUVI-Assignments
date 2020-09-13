var request = new XMLHttpRequest()
var url_string = 'http://api.openweathermap.org/data/2.5/weather?q=chennai&APPID=b1769270caf71728f8e71586ebda46fb';

// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string , true) 
request.send();

request.onload = function() {
  // Begin accessing JSON data here
//console.log(this.response);

var data = JSON.parse(this.response)

	console.log(data);

}