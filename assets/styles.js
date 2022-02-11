// weather app key
//variables
var APIKey = "a649ac03335b61b88b42edeea070ca64";
var city = "";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey;
var searchCity = $("#search-city");
var searchButton = $("#search-button");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidty= $("#humidity");
var currentWSpeed=$("#wind-speed");
var sCity=[];
//fetch(queryURL);

// for loop for api
function find(c) {
    for (var i=0; i<sCity.length; i++) {
        if(c.toUpperCase() === sCity[i]){
            return -1;
        }
    }
    return 1;
}

//function to display weather
function weatherDisplay(event) {
    event.preventDefault();
    if(searchCity.val().trim()!=="") {
        city=searchCity.val().trim();
        currentWeather(city);
    }
}
//function to push current weather
function currentWeather(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey;
    $.ajax({
        url:queryURL,
        method:'GET',
    }).then(function(reponse)
 {
     console.log(reponse);

     var temp = (reponse.main.temp - 273.15) * 1.80 + 32;

     $(currentTemperature).html(( temp).toFixed(2)+"&#8457");

     $(currentHumidty).html( reponse.main.humidity+"%");

     var wind = reponse.wind.speed;
     var windMPH = (wind*2.237).toFixed(1);
     $(currentWSpeed).html( windMPH + "MPH");
    })
}

//function to posh five day
function fiveDay(cityid) {
    var dayover = false;
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?id="+cityid+"&appid="+APIKey;
    $.ajax({
        url:fiveDayURL,
        method:"GET"
    }).then(function(response) {
        console.log(response);
        for (i=0;i<5;i++) {
            var tempK = response.list[((i+1)*8)-1].main.temp;
            var tempF = (((tempK - 273.5)*1.80)+32).toFixed(2);
            var humidity = response.list[((i+1)*8)-1].main.humidity;


            $("#fTemp"+i).html(tempF + "&#8457");
            $("#fHumidity"+i).html(humidity + "%");
        }
    });
}



//click listener 
$('#search-button').on('click', weatherDisplay);
