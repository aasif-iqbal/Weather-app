const request = require('request');

// #using callback function
const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoiam9obmRlbzg3ODkiLCJhIjoiY2xrNGk3eDdmMTFnMjNkbXBieGVsaWs5ZiJ9.fUo7HjRgsD5gyJgJDAJ99A&limit=1';

    request({url:url, json:true}, (error, response) => {
        if(error){
            callback('unable to connect to location service...', undefined);
        } else if (error){
            callback('Unable to find location.. try another search..', undefined);
        }else{
            callback(undefined, {
                // console.log('response',response.body);
                 latitude : response.body.features[0].center[1],
                 longitude : response.body.features[0].center[0],
                 location : response.body.features[0].place_name

                // console.log(latitude, longitude);
            })
        }
    })
}


module.exports = geocode;
