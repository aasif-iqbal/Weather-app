const request = require('request');

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=3f53595038b7f91a7234c7def7fcbeaf&query='+latitude +','+longitude;    

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            // console.log(body);
            // body.current.temperature            
            callback(undefined, 'Weather:'+body.current.weather_descriptions[0] + ', It is currently ' + body.current.temperature + ' degress out.');
        }
    })
}

module.exports = forecast;