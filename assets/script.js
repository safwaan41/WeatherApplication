var tempEl = document.getElementById("temperature");

var humidEl = document.getElementById("humidity");

var windEl = document.getElementById("wind");
//5day
var day1temp = document.getElementById('day1temp')
var day2temp = document.getElementById('day2temp')
var day3temp = document.getElementById('day3temp')
var day4temp = document.getElementById('day4temp')
var day5temp = document.getElementById('day5temp')

var day1hum = document.getElementById('day1hum')
var day2hum = document.getElementById('day2hum')
var day3hum = document.getElementById('day3hum')
var day4hum = document.getElementById('day4hum')
var day5hum = document.getElementById('day5hum')

var citySearchForm = document.querySelector('#citySearchForm');

citySearchForm.addEventListener('submit',function(e){
  e.preventDefault();
  var key = '635c7388698dd4b9e9794873cc2403c3';
  var cityInput = document.getElementById ("city-search").value;

    // fetch("https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=" + key) 
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityInput+"&appid=635c7388698dd4b9e9794873cc2403c3&units=imperial") 
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      tempEl.textContent=data.main.temp
      humidEl.textContent=data.main.humidity
      windEl.textContent=data.wind.speed

      //5 day

      fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+data.coord.lat+"&lon="+data.coord.lon+"&appid=635c7388698dd4b9e9794873cc2403c3&units=imperial") 
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        day1temp.textContent=data.list[0].main.temp + " F"
        day2temp.textContent=data.list[1].main.temp+ " F"
        day3temp.textContent=data.list[2].main.temp+ " F"
        day4temp.textContent=data.list[3].main.temp+ " F"
        day5temp.textContent=data.list[4].main.temp+ " F"

        day1hum.textContent=data.list[0].main.humidity + "% Humidity"
        day2hum.textContent=data.list[1].main.humidity + "% Humidity"
        day3hum.textContent=data.list[2].main.humidity + "% Humidity"
        day4hum.textContent=data.list[3].main.humidity + "% Humidity"
        day5hum.textContent=data.list[4].main.humidity + "% Humidity"
        
      })


    })

    

})

