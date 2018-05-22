$(document).ready(function(){
  
  var long;
  var lat;
  var ftemp;
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    
    var api ='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&APPID=4861ea9c2e629d55f2e46f10a079dff9';
    $.getJSON(api, function(data){
      var city = data.name;
      var kelvin = data.main.temp; 
        
    ftemp= (Math.floor((kelvin)*(9/5)-459.67));
    
      console.log(city);
      console.log(api);
      console.log(ftemp);
        
    document.querySelector('#cityName').textContent = city;
    document.querySelector('#temp').textContent = ftemp + ' degrees Farenheit';
    });
  });
}
});