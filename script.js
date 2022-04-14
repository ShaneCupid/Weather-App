// const btn =  document.getElementsById('show-weather');
// const input = document.getElementsById('zipcode');

var button = document.querySelector('.show-weather')
var zipcode = document.querySelector('.zipcode')
var name = document.querySelector('.city-name')
var lat = document.querySelector('.lat')
var lon = document.querySelector('.lon')
var main = document.querySelector('.weather-main')
var weatherDesc = document.querySelector('.weather-desc')
var speed = document.querySelector('.wind-speed')
var degree = document.querySelector('.wind-degree')
var current = document.querySelector('.temp-current')
var mimimum = document.querySelector('.temp-min')
var maximum = document.querySelector('.temp-max')
var humidity = document.querySelector('.humidity')


//fetch('https:api.openweathermap.org/data/2.5/weather?zip='+input.value+'1a21a53fe38f88cc2066bc04b132dffe')
fetch('https:api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${1a21a53fe38f88cc2066bc04b132dffe}'
 .then(response => response.json()
 .then(data => console.log(data))

btn.addEventListener('click', () => {
  btn = input.innerHTML
  showWeather()
});

// async function showWeather() {
//   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip code},{country code}&appid=${1a21a53fe38f88cc2066bc04b132dffe}`)
//   const data = await response.json()
//   console.log
// }
