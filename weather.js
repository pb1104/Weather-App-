
const apikey="82e7c90c7c53900a524412184efb2c8f";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function chechweather(city){
  const response =  await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) +' °C';
  document.querySelector('.hum').innerHTML = data.main.humidity +'%';
  document.querySelector('.wind').innerHTML = data.wind.speed +' Km/hr';
  let pic = data.weather[0].main;
  const n = document.querySelector(".weather-icon");
  console.log(pic);
 if(pic == 'Clouds'){
   n.src ="C:/Users/KIIT/Downloads/weather-app-img/images/clouds.png"
 }
 if(pic == 'Haze'){
    n.src ="C:/Users/KIIT/Downloads/weather-app-img/images/mist.png";
 }
 if(pic == 'Clear'){
    n.src = "C:/Users/KIIT/Downloads/weather-app-img/images/clear.png";
 }
 if(pic == 'Rain'){
    n.src = "C:/Users/KIIT/Downloads/weather-app-img/images/rain.png";
 }
 if(pic == 'Drizzle'){
    n.src = "C:/Users/KIIT/Downloads/weather-app-img/images/drizzle.png";
 }
 if(pic == 'Snow'){
    n.src = "C:/Users/KIIT/Downloads/weather-app-img/images/snow.png";
 }
}
function getit() {
    const s = document.querySelector(".i").value; // Access the input value using its class
    chechweather(s);
  }
  
