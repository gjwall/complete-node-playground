// A callback function is a function we provide as an argument to another function and is called later.
setTimeout( () => {
    console.log('Two seconds are up')
}, 2000)

// names and shortNames prove that the callback pattern can be synchronous
const names = ['Graham', 'Sam', 'Gemma']

const shortNames = names.filter( (name) => {
    return name.length <= 5
})

console.log(shortNames)

// Option 1
// const geoCode = (address, callback) => {
//     // When you add in the code verbatim below the return is "undefined"
//     // No return statement directly in geoCode so the returned value is undefined
//     // Return pattern does not work for asynchronous callbacks => change to a callback pattern
//     setTimeout( () => {
//         const data = {
//             latitude: 0, 
//             longitude: 0
//         }
    
//         // Option 1 - ignore the callback and use return values
//         return data
//     }, 2000)

// }

// // Option 1 - ignore the callback
// const data = geoCode('Edinburgh')
// console.log(data)

// Option 2 - callback pattern
const geoCode = (address, callback) => {

    setTimeout( () => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)

}

// Argument names do not need to match those from the callback above
// the arguments themselves are important
geoCode('Edinburgh', (data) => {
    console.log(data)
})

// 