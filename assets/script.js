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

cityInput.addEventListener("submit" , function (search)
{
    search.preventDefault();
    var cities = {};
    cityInput.val("");
    

    fetch 
    (
        "https://api.openweathermap.org/geo/1.0/direct?q=" + cityInput +"&units=imperial&appid=" + apiKey
    )

        then((data)=>
        {
            return data.json();
        })

        .then((data) =>
        {
            for (var el of data)
            {
                cities["${el.name}, ${el.lat}, ${el.lon}"] =
                {
                    name: el.name,
                    lat: el.lat,
                    lon: el.lon,
                    state: el.state,
                    country: el.country
                };
                var li = $("<li>");
                li.attr("class", "option");
                li.attr("id", `${el.name}_${el.lat}_${el.lon}`);
                li.text(`${el.name}, ${el.state}, ${el.country}`);
                $("#options").append(li);
            }

            $(".option").on("click", function (search) 
            {
                let cityInput = $(e.target).text();
                $("#options").empty();
                $("#options").css("display", "none");
                let element = $(e.target);
                let elObj = cities[element.attr("id")];

                searchLocation[`${elObj.name}_${elObj.state}_${elObj.country}`] = elObj;

                localStorage.setItem("locationData", JSON.stringify(searchLocation));
        
                let lat = parseFloat(elObj.lat);
        
                let lon = parseFloat(elObj.lon);

                getWeatherData(lat, lon, key, cityInput);
        
                renderLocationData();
        });
    });    
});

console.log(fetch);