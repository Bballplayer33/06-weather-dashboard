// weather app key
//variables
var APIKey = "a649ac03335b61b88b42edeea070ca64";
var city = "";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey;
var searchCity = $("#search-city");
var searchButton = $("#search-button");
var clearButton = $("#clear-history");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidty= $("#humidity");
var currentWSpeed=$("#wind-speed");
var currentUvindex= $("#uv-index");
var sCity=[];
//fetch(queryURL);

function find(c) {
    for (var i=0; i<sCity.length; i++) {
        if(c.toUpperCase() === sCity[i]){
            return -1;
        }
    }
    return 1;
}


function weatherDisplay(event) {
    event.preventDefault();
    if(searchCity.val().trim()!=="") {
        city=searchCity.val().trim();
        currentWeather(city);
    }
}

function currentWeather(city) {
    queryURL;
    $.ajax({
        url:queryURL,
        method:'GET',
    }).then(function(reponse)
 {
     console.log(reponse);

     var temp = (reponse.main.temp - 273.15) * 1.80 + 32;

     $(currentTemperature).html((temp).toFixed(2)+"&#8457");

     $(currentHumidty).html(reponse.main.humidity+"%");

     var wind = reponse.wind.speed;
     var windMPH = (wind*2.237).toFixed(1);
     $(currentWSpeed).html(windMPH + "MPH");

     


 })
}

$('#search-button').on('click', weatherDisplay);