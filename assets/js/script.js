var cityFormEl = document.querySelector('#city-form')
var cityNameEl = document.querySelector('#city');
var buttonContainerEl = document.querySelector('#button-container');
var weatherEl = document.querySelector('#weather');
var weatherContainerEl = document.querySelector('#weather-container');
var forecastContainerEl = document.querySelector('#forecast-container');
var citySearchEl = document.querySelector('#search-city');
var historyEl = document.querySelector('#city-button');
var searchCity = document.querySelector('#search-city');

var submitHandler = function(event) {
    event.preventDefault();

    var cityName = cityNameEl.value.trim();

    if (cityName) {
        getWeatherOfCity(cityName);

        weatherContainerEl.textContent = '';
        cityNameEl.value = '';
    } else {
        alert('City does not exist, try again!')
    }
}

var buttonHandler = function(event) {
    var city = event.target.getAttribute('data-city');

    if (city) {
        getWeatherOfCity(city);
        weatherContainerEl.textContent = ''l
    }
};




function init() {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=Raleigh&limit=1&appid=79fd1882fd1e16cad8be5bc759899879')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data[0].lat, data[0].lon);
        getOneCallWeather(data[0].lat, data[0].lon);
    });
}

function getOneCallWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=79fd1882fd1e16cad8be5bc759899879&units=imperial`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var temp = data.current.temp;
            var wind_speed = data.current.wind_speed;
            var uvi = data.current.uvi;
            var humidity = data.current.humidity;
            var tempEl = document.createElement('p');
            var windEl = document.createElement('p');
            var uvEl = document.createElement('p');
            var humidityEl = document.createElement('p');
            tempEl.textContent = "Temperature: " + temp;
            windEl.textContent = "Wind Speed: " + wind_speed;
            uvEl.textContent = "UVI: " + uvi;
            humidityEl.textContent = "Humidity: " + humidity;

            document.body.append(tempEl, windEl, uvEl, humidityEl);

            for(var i = 0; i < data.daily.length; i++) {
                var day = data.daily[i];
                console.log(day);
            }
        });
 }

init();