const doWorkCallback = (callback) => {
    // Can accidentally call callback twice
    // Argument order can be hard to understand
    // Nested callbacks hard to understand
    setTimeout( () => {
        //callback('This is my error', undefined)
        callback(undefined, [1,4,7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if(error) {
        return console.log(error)
    }

    console.log(result)
})