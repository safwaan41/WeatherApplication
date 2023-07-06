const apiKey = "635c7388698dd4b9e9794873cc2403c3";

// html innertext contents
var cityEl = document.getElementById("city");

var dateEl = document.getElementById("date");

var iconEl = document.getElementById("icon");

var tempEl = document.getElementById("temprature");

var humidEl = document.getElementById("humidity");

var windEl = document.getElementById("wind");

var cityInput = document.getElementById("city-search"); //SEARCH BAR INPUT...maybe use .value?

var cityListEl = document.querySelector(".cityList");

// local storage of history
var searchCities = [];


// clearBtn.on("click", function (banana) 
// {
//     localStorage.clear();
//     location.reload("");
//   });

// function loadCities() {
//     var storedCities = JSON.parse(localStorage.getItem('searchCities'));
//     if (storedCities) {
//         searchCities = storedCities;
//     }
// }
// // Store searched cities in local storage
// function storeCities() {
//     localStorage.setItem('searchCities', JSON.stringify(searchCities));
// }
// loadCities();
// storeCities();

// function getWeatherData(){
    
// } LOCAL STORAGE TO WORK ON

cityInput.addEventListener("submit" function (search)){
var cities = {};
search.preventDefault();
var cityInput = 

}