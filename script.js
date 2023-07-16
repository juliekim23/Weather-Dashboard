var APIKey = 'a232ea3298ff0f994f2ecb5484f3f847';
var city; //user input for what city
//specify state and country variables in your API call, as multiple countries or states might have cities with the same name. 
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;


//https://openweathermap.org/forecast5 5-day weather
//https://openweathermap.org/api/geocoding-api city to lat/lon
var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}'

fetch(queryURL)


//use local storage to store persistent data 

var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

//getApi function is called when the fetchButton is clicked

function getApi() {
  // Insert the API url to get a list of your repos
  var requestUrl = 'https://api.github.com/users/juliekim23/repos'

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //looping over the fetch response and inserting the URL of your repos into a list
      for (var i = 0; i < data.length; i++) {
        //Create a list element
        var listItem = document.createElement('li');

        //Set the text of the list element to the JSON response's .html_url property
        listItem.textContent = data[i].html_url;

        //Append the li element to the id associated with the ul element.
        repoList.appendChild(listItem);
      }
    });
}

fetchButton.addEventListener('click', getApi);

