const apiKey = '927aac9ea75c77033d89e5c884972238';

function getWeather() {

let city = document.getElementById("cityInput").value;

if(city === ""){
alert("Please enter a city name");
return;
}

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)

.then(function(response){
return response.json();
})

.then(function(data){

// Agar city galat hai
if(data.cod === "404"){
alert("City not found");
return;
}

// Data show karna
document.getElementById("city").innerText = data.name;

document.getElementById("temp").innerText = data.main.temp + " °C";

document.getElementById("desc").innerText = data.weather[0].description;

document.getElementById("humidity").innerText = data.main.humidity + " %";

document.getElementById("wind").innerText = data.wind.speed + " km/h";

// Weather icon
let iconCode = data.weather[0].icon;

let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

document.getElementById("icon").src = iconUrl;

})

.catch(function(error){

alert("Error fetching weather data");

});

}


// Date and Time

function updateClock(){

let now = new Date();

let date = now.toDateString();

let time = now.toLocaleTimeString();

document.getElementById("date").innerText = date;

document.getElementById("clock").innerText = time;

}

setInterval(updateClock,1000);