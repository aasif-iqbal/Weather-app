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
    console.log(current.weather_descriptions[0]+': Current temperature is '+current.temperature+' degree and its feels like ' + current.feelslike);
}


// mapBox api

// https://api.mapbox.com/geocoding/v5/mapbox.places/{search_text}.json

// pk.eyJ1Ijoiam9obmRlbzg3ODkiLCJhIjoiY2xrNGk3eDdmMTFnMjNkbXBieGVsaWs5ZiJ9.fUo7HjRgsD5gyJgJDAJ99A

/*
As, This package has been deprecated 
https://www.npmjs.com/package/request

So, We can use postman-request
https://www.npmjs.com/package/postman-request
*/ 