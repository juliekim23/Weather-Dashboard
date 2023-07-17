//get the params. 

function getCity(){
    var searchCity = document.querySelector('#cityinput').value;
    console.log(searchCity);
}

getCity();

var APIKey = 'a232ea3298ff0f994f2ecb5484f3f847';
var cityName = 'London'; 
//specify state and country variables in your API call, as multiple countries or states might have cities with the same name. 
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + APIKey;

//direct geocoding. 

    //https://openweathermap.org/forecast5 5-day weather
    //https://openweathermap.org/api/geocoding-api city to lat/lon
    var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}'

    //example API call: London

    function getAPI(){

    var cityURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=' + APIKey;

    fetch(cityURL)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            var geoCoordinates = JSON.stringify(data);
            localStorage.setItem('searchGeo', geoCoordinates)
        })
    }

    getAPI();

    function getQuery(){
        var queryInfo = localStorage.getItem('searchGeo');
        var splitLat = queryInfo.split(',"lon":');
        var latitude = splitLat[0].split('"lat":').pop();
        var splitLon = queryInfo.split(',"country"');
        var longitude = splitLon[0].split('"lon":').pop();
        console.log(latitude);
        console.log(longitude);
        localStorage.setItem('latitude', latitude);
        localStorage.setItem('longitude',longitude);
    }

    getQuery();

//5-day weather by cityname 

 'api.openweathermap.org/data/2.5/forecast?lat=51.5073219&lon=-0.1276474&appid=' + APIKey + '&units=metric'
var weekAPI = 
    function getAPI(){
        var queryLatitude = localStorage.getItem('latitude')
        var queryLongitude = localStorage.getItem('longitude')
    var weekweather = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + queryLatitude + '&lon=' + queryLongitude + '&appid=' + APIKey + '&units=metric'
    fetch(weekweather)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
        })
    }

    weekAPI()







//getParams (W6 challenge)


//use local storage to store search history



//use params to search API results



