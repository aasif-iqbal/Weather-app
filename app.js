const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=22df95c17943bd664876c9c59c1620d1&query=37.8267,-122.4233';

// convert temperature to units=f, temperature: Fahrenheit
const url = 'http://api.weatherstack.com/current?access_key=3f53595038b7f91a7234c7def7fcbeaf&query=37.8267,-122.4233&units=f';

request({url:url, json:true}, function (error, response) {
//    const dataObj = JSON.parse(response.body);
    // console.log(response.body.current);
    const current = response.body.current;
     
    showWeatherForcast(current)    
});

const showWeatherForcast = (current) => {
    
    let weatherForcast = current.weather_descriptions[0]+': Current temperature is '+current.temperature+' degree and its feels like ' + current.feelslike;

    console.log(weatherForcast);    //Sunny: Current temperature is 72 degree and its feels like 72
}

// mapBox api

// https://api.mapbox.com/geocoding/v5/mapbox.places/{search_text}.json

// pk.eyJ1Ijoiam9obmRlbzg3ODkiLCJhIjoiY2xrNGk3eDdmMTFnMjNkbXBieGVsaWs5ZiJ9.fUo7HjRgsD5gyJgJDAJ99A

//GeoCoding
/*  
- Address(enter by user) = {lati, long} from map-box -> { weather } from weatherStack   
- we do forward geocoding, we provide address and get latitude and longitude.
- visit https://docs.mapbox.com/api/search/geocoding/ and copy forward geocoding -api
    ie. https://api.mapbox.com/geocoding/v5/{endpoint}/{search_text}.json
    @params
    endpoint = mapbox.place, search_text = address_name

    # Find Los Angeles:
    https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoiam9obmRlbzg3ODkiLCJhIjoiY2xrNGk3eDdmMTFnMjNkbXBieGVsaWs5ZiJ9.fUo7HjRgsD5gyJgJDAJ99A

    1.fetch features.center or feature.geometry to get {lati, long}
    2. set limit = 1 (default its 5 and max=30)
    https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoiam9obmRlbzg3ODkiLCJhIjoiY2xrNGk3eDdmMTFnMjNkbXBieGVsaWs5ZiJ9.fUo7HjRgsD5gyJgJDAJ99A&limit=1;
*/

/* Task: Print the lat/long for Los Angeles
// 1. Fire off a new request to the URL explored in browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longitude to the terminal
// 4. Test your work!
*/

const geocoding = '';


/*
As, This package has been deprecated 
https://www.npmjs.com/package/request

So, We can use postman-request
https://www.npmjs.com/package/postman-request
*/ 