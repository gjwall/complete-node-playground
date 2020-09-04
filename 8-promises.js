const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout( () => {
        // Only the first resolve or reject is ever run
        resolve([7,4,1])
        reject('Things went wrong')
        //resolve([3,2,2])
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success', result)
}).catch( (error) => {
    console.log('Error', error)
})

//                             Fulfilled
//                         /
// Promise -----> pending 
//                         \
//                             Rejected