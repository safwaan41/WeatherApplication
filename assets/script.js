const apiKey = "635c7388698dd4b9e9794873cc2403c3";

// html innertext contents
var cityEl = document.getElementById("city");

var dateEl = document.getElementById("date");

var iconEl = document.getElementById("icon");

var tempEl = document.getElementById("temprature");

var humidEl = document.getElementById("humidity");

var windEl = document.getElementById("wind");

var cityInput = document.getElementById ("city-search"); //SEARCH BAR INPUT...maybe use .value?

var cityListEl = document.querySelector(".cityList");

var key = '635c7388698dd4b9e9794873cc2403c3';
var fetchURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + key


function weatherBalloon( cityInput ) 
{
    var key = '635c7388698dd4b9e9794873cc2403c3';
    fetch("https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=" + key) 
    
    .then(function(resp) {  resp.json() }) // Convert data to json
    .then(function(data) {
        console.log(data);
        // document.getElementById('description').innerHTML = d.weather[0].description;
        document.getElementById('temperature').textContent= Fahrenheit + '&deg;';
        document.getElementById('cityEl').innerHTML = d.name;
    })
    .catch(function() {
      // catch any errors
    });
  }
  window.onload = function() {
    weatherBalloon(cityInput);
  }
  function drawWeather( d ) {
	
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	

}

//   fetch("https://api.openweathermap.org/data/2.5/weather?lat=43.700111&lon=-79.416298&appid=" + key) 










// // local storage of history
// var searchCities = [];


// // clearBtn.on("click", function (banana) 
// // {
// //     localStorage.clear();
// //     location.reload("");
// //   });

// // function loadCities() {
// //     var storedCities = JSON.parse(localStorage.getItem('searchCities'));
// //     if (storedCities) {
// //         searchCities = storedCities;
// //     }
// // }
// // // Store searched cities in local storage
// // function storeCities() {
// //     localStorage.setItem('searchCities', JSON.stringify(searchCities));
// // }
// // loadCities();
// // storeCities();

// // function getWeatherData(){
    
// // } LOCAL STORAGE TO WORK ON

// cityInput.addEventListener("submit" , function (search)
// {
//     search.preventDefault();
//     var cities = {};
//     cityInput.val("");
    

//     fetch 
//     (
//         "https://api.openweathermap.org/geo/1.0/direct?q=" + cityInput +"&units=imperial&appid=" + apiKey
//     )
//     console.log(fetch);
//         then((data)=>
//         {
//             return data.json();
//         })

//         .then((data) =>
//         {
//             for (var el of data)
//             {
//                 cities["${el.name}, ${el.lat}, ${el.lon}"] =
//                 {
//                     name: el.name,
//                     lat: el.lat,
//                     lon: el.lon,
//                     state: el.state,
//                     country: el.country
//                 };
//                 var li = $("<li>");
//                 li.attr("class", "option");
//                 li.attr("id", `${el.name}_${el.lat}_${el.lon}`);
//                 li.text(`${el.name}, ${el.state}, ${el.country}`);
//                 $("#options").append(li);
//             }

//             $(".option").on("click", function (search) 
//             {
//                 let cityInput = $(e.target).text();
//                 $("#options").empty();
//                 $("#options").css("display", "none");
//                 let element = $(e.target);
//                 let elObj = cities[element.attr("id")];

//                 searchLocation[`${elObj.name}_${elObj.state}_${elObj.country}`] = elObj;

//                 localStorage.setItem("locationData", JSON.stringify(searchLocation));
        
//                 let lat = parseFloat(elObj.lat);
        
//                 let lon = parseFloat(elObj.lon);

//                 getWeatherData(lat, lon, key, cityInput);
        
//                 renderLocationData();
//         });
//     });    
// });

// function getWeatherData(lat, lon, key, cityEl) {
//     fetch
//     (
//       "https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial"
//     )
//       .then((data) => data.json())
//       .then((data) => {
//         let list = data.list;
//         let newData = [];
//         for (let i = 0; i <= 40; i += 8) {
//           if (i !== 40) {
//             newData.push(list[i]);
//           } else {
//             newData.push(list[40 - 1]);
//           }
//         }
//         renderWeatherData(newData, cityEl);
//       });
//   }
//   function getWeatherData();


//   function renderWeatherData(data, cityEl) {
//     let liElArr = $(".fiveDay").children();
//     // Current location and current weather data
//     $(".currentWeather #city").text(cityEl);
//     // $("#present_date").text(dayjs.unix(data[0].dt).format("MM/DD/YY"));
//     $("#icon").attr(
//       "src",
//       `https://openweathermap.org/img/wn/${data[0].weather[0].icon}@2x.png`
//     );
//     $("#temprature").text(`${data[0].main.temp} `);
//     $("#wind").text(`${data[0].wind.speed}  MPH`);
//     $("#humidity").text(`${data[0].main.humidity} %`);
  
//     for (let i = 0; i < liElArr.length; i++) {
//       let li = liElArr[i];
//       let info = data[i + 1];
//       $(li).find(".date").text(dayjs.unix(info.dt).format("MM/DD/YY"));
//       $(li)
//         .find(".icon")
//         .attr(
//           "src",
//           `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
//         );
//       $(li).find(".temperature").text(`${info.main.temp} `);
//       $(li).find(".wind").text(`${info.wind.speed} `);
//       $(li).find(".humidity").text(`${info.main.humidity} `);
//     }
//   }
//   function getWeatherData()