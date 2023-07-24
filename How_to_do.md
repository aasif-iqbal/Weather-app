1. Create account in https://weatherstack.com/
2. Copy Api 
3. Convert temperature to units=f, temperature: Fahrenheit | query={latitude, longitude}
```javascript 
const url = 'http://api.weatherstack.com/current?access_key=22df95c17943bd664876c9c59c1620d1&query=37.8267,-122.4233&units=f';
```

4. Response:
```json
// 20230723022643
// http://api.weatherstack.com/current?access_key=3f53595038b7f91a7234c7def7fcbeaf&query=37.8267,-122.4233&units=f

{
  "request": {
    "type": "LatLon",
    "query": "Lat 37.83 and Lon -122.42",
    "language": "en",
    "unit": "f"
  },
  "location": {
    "name": "San Francisco",
    "country": "United States of America",
    "region": "California",
    "lat": "37.775",
    "lon": "-122.418",
    "timezone_id": "America/Los_Angeles",
    "localtime": "2023-07-22 13:56",
    "localtime_epoch": 1690034160,
    "utc_offset": "-7.0"
  },
  "current": {
    "observation_time": "08:56 PM",
    "temperature": 75,
    "weather_code": 116,
    "weather_icons": [
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
    ],
    "weather_descriptions": [
      "Partly cloudy"
    ],
    "wind_speed": 8,
    "wind_degree": 260,
    "wind_dir": "W",
    "pressure": 1011,
    "precip": 0,
    "humidity": 48,
    "cloudcover": 25,
    "feelslike": 79,
    "uv_index": 5,
    "visibility": 10,
    "is_day": "yes"
  }
}
```


5. Create Account in https://www.mapbox.com/
6. Geocoding
    // Address -> Lat/Long -> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoiam9obmRlbzg3ODkiLCJhIjoiY2xrNGk3eDdmMTFnMjNkbXBieGVsaWs5ZiJ9.fUo7HjRgsD5gyJgJDAJ99A&limit=1';

7. Responce
```json
// 20230723023922
// https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoiam9obmRlbzg3ODkiLCJhIjoiY2xrNGk3eDdmMTFnMjNkbXBieGVsaWs5ZiJ9.fUo7HjRgsD5gyJgJDAJ99A&limit=1

{
  "type": "FeatureCollection",
  "query": [
    "los",
    "angeles"
  ],
  "features": [
    {
      "id": "place.192407788",
      "type": "Feature",
      "place_type": [
        "place"
      ],
      "relevance": 1,
      "properties": {
        "mapbox_id": "dXJuOm1ieHBsYzpDM2ZvN0E",
        "wikidata": "Q65"
      },
      "text": "Los Angeles",
      "place_name": "Los Angeles, California, United States",
      "bbox": [
        -118.52144,
        33.899991,
        -118.126728,
        34.161439
      ],
      "center": [
        -118.242766,
        34.053691
      ],
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.242766,
          34.053691
        ]
      },
      "context": [
        {
          "id": "district.14051052",
          "mapbox_id": "dXJuOm1ieHBsYzoxbWJz",
          "wikidata": "Q104994",
          "text": "Los Angeles County"
        },
        {
          "id": "region.419052",
          "mapbox_id": "dXJuOm1ieHBsYzpCbVRz",
          "wikidata": "Q99",
          "short_code": "US-CA",
          "text": "California"
        },
        {
          "id": "country.8940",
          "mapbox_id": "dXJuOm1ieHBsYzpJdXc",
          "wikidata": "Q30",
          "short_code": "us",
          "text": "United States"
        }
      ]
    }
  ],
  "attribution": "NOTICE: © 2023 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained. POI(s) provided by Foursquare."
}
```