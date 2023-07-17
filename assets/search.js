
//search button

var searchForm = document.querySelector('#searchform');

function citySubmit (event){
    event.preventDefault();

    var citySearch = document.querySelector('#cityinput').value;

    if (!citySearch){
        window.alert('Enter a city!');
        return;
    }

    var cityLink = './cityweather.html?q=' + citySearch;
    location.assign(cityLink)
}


searchForm.addEventListener('submit',citySubmit);


//get the params. 

function getCity(){
    var searchCity = document.querySelector
}
