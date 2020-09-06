// Synchronous version
const doWorkSync = () => {
    return 'Graham'
}

const doWork = async () => {
    // Throw an error to trigger the .catch
    //throw new Error('Error')
    //return 'Graham'
    // The await operator is used with a promise
    const sum = await add(1, -99)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, -3)
    return sum3
}

const add = (a, b) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if( a < 0 || b < 0 ) {
                return reject('Numbers must be non-negative')
            }
            resolve(a+b)
        }, 2000)
    })
}

// Syncronous version
//console.log(doWork())

doWork().then((result) => {
    console.log('result', result) 
}).catch((e) => {
    console.log('e', e)
})



