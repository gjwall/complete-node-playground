const http = require('http') 

const url = 'http://api.weatherstack.com/current?access_key=71e6621645db9f02170819c978d2f16b&query=45,-75&units=m'

const request = http.request(url, (response) => {
    
    let data = ''

    response.on('data', (chunk) => {
        // This fires when data comes in
        data = data + chunk.toString()
        //console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data) 
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()