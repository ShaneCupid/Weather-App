//const btn =  document.getElementById('show-weather');
//const input = document.getElementById('zipcode');

const btn = document.getElementById("show-weather")
let zipcode = document.getElementById('zipcode')
let name = document.getElementById('city-name')
let latitude = document.getElementById('lat')
let longitude = document.getElementById('lon')
let main = document.getElementById('weather-main')
let weatherDesc = document.getElementById('weather-desc')
let windSpeed = document.getElementById('wind-speed')
let windDegree = document.getElementById('wind-degree')
let current = document.getElementById('temp-current')
let minimum = document.getElementById('temp-min')
let maximum = document.getElementById('temp-max')
let humid = document.getElementById('humidity')

btn.addEventListener('click', () => generateWeather())
function generateWeather() {

const bijayboy = zipcode.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${bijayboy},us&units=imperial&appid=1a21a53fe38f88cc2066bc04b132dffe`)
   .then(response => response.json())
   .then(data => {

     if(data.name==null){
      alert(data.message+ "" +data.cod+ "" + "boy try again")
}
      else{

     console.log(data)
name.innerHTML = data.name
longitude.innerHTML = data.coord.lon
latitude.innerHTML = data.coord.lat
//main.innerHTML = data.weather[0].id
main.innerHTML = data.weather[0].main
weatherDesc.innerHTML = data.weather[0].description
//main.innerHTML = data.weather[0].icon
current.innerHTML = data.main.temp
minimum.innerHTML = data.main.temp_min
maximum.innerHTML = data.main.temp_max
humid.innerHTML = data.main.humidity
windSpeed.innerHTML = data.wind.speed
windDegree.innerHTML = data.wind.deg
}})
}
// async function generateWeather(zipcode) {
//    bijayboy = zipcode.value
//   const responses = await fetch (`https://api.openweathermap.org/data/2.5/weather?zip=${bijayboy},us&units=imperial&appid=1a21a53fe38f88cc2066bc04b132dffe`)
//
//  if(responses.status<=00501 || responses.status>99950){
//   alert("Zipcode is invalid my boy!");
// }
// const data = await response.json()
// }
