function init() {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=Nashville&limit=1&appid=79fd1882fd1e16cad8be5bc759899879')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data[0].lat, data[0].lon);
        getOneCallWeather(data[0].lat, data[0].lon);
    });
}


function getOneCallWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=79fd1882fd1e16cad8be5bc759899879`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });

}
init();