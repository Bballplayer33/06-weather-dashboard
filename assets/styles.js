// weather app key
var APIKey = "a649ac03335b61b88b42edeea070ca64";
var city;
var queryURL = "api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey;
//fetch(queryURL);

async function getapi(queryURL) {
    const reponse = await fetch(queryURL);

    var data = await reponse.json();
    console.log(data);
    if (reponse) {
        hideloader();
    }
    Show(data);
}
getapi(queryURL);

function hideloader() {
    document.getElementById('').style.display = 'none';
}

function show(data) {
    
}