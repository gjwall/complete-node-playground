// // Watch the "Call stack, Callback queue and event loop" video once the weather app is complete
// console.log('Starting')

// setTimeout(() => {
//     console.log('2 second timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 second timer')
// }, 0)

// console.log('Stopping')

const request = require('request')

// http://api.weatherstack.com/current?access_key=71e6621645db9f02170819c978d2f16b&query=37.8267,-122.4233
const url = 'http://api.weatherstack.com/current'
const secret = '71e6621645db9f02170819c978d2f16b'
const place = '37.8267,-122.4233'
const units = '&units=m'
const addr = url + '?access_key='+ secret + '&query=' + place + units

// console.log(addr) 

// The exercise
// Print "it is currently xx degrees out. It feels like xx degrees out.".
// Test your work
// Only response or error will ever be populated
// Error is used for low level errors eg lack of internet connectivity
request({ url: addr, json: true }, (error, response) => {
      if(error) {
            console.log('Unable to connect to weather service')
      } else if(response.body.error) {
            // This error is applicable with the web service
            console.log('Unable to find location')
      } else {
            const desc = response.body.current.weather_descriptions[0]
            const curr = response.body.current.temperature
            const feel = response.body.current.feelslike
            console.log(desc + '. It is currently ' + curr + ' degrees out. It feels like ' + feel + ' degrees out.')
      }
})

// Fire off a new request for the URL explored in browser
// Have the request module parse it as JSON
// Print the latitude and longitude
// Test

// Mapbox API
//const mapboxURI = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicjNkczQxZnQiLCJhIjoiY2tlNDh1cjJ1MHFudzJ5bGZpM3FlNTlicyJ9.-CakA1sc051xBnOCTfR2RA&limit=1'
const mapboxURI = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Philadelphia.json?access_token=pk.eyJ1IjoicjNkczQxZnQiLCJhIjoiY2tlNDh1cjJ1MHFudzJ5bGZpM3FlNTlicyJ9.-CakA1sc051xBnOCTfR2RA&limit=1'
//const mapboxURI = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoicjNkczQxZnQiLCJhIjoiY2tlNDh1cjJ1MHFudzJ5bGZpM3FlNTlicyJ9.-CakA1sc051xBnOCTfR2RA&limit=1'

request(
       { url: mapboxURI, json: true}, (error, response) => {
             if(error) {
                  console.log('Web service is not available')
             } else if(response.body.features.length === 0) {
                  console.log('Unable to find location. Try again with a different term')
             } else {
                  const lat = response.body.features[0].center[0]
                  const longitude = response.body.features[0].center[1]
                  console.log('Latitude = ' + lat + ' and the longitude = ' + longitude)
            }
       }
)

/*
https://api.mapbox.com/geocoding/v5/mapbox.places/12wht.json?access_token=pk.eyJ1IjoicjNkczQxZnQiLCJhIjoiY2tlNDh1cjJ1MHFudzJ5bGZpM3FlNTlicyJ9.-CakA1sc051xBnOCTfR2RA&limit=1

https://docs.mapbox.com/api/search/#endpoints

https://weatherstack.com/documentation

https://weatherstack.com/documentation

https://www.npmjs.com/package/request

https://learning.oreilly.com/home/

 */