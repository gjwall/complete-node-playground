const add = (a, b) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(a+b)
        }, 2000)
    })
}

// Old style Promises
// add(1,2).then((sum) => {
//     console.log(sum)
//     add(sum, 5).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })

// Promise chaining
// Only need to add the .then clauses. the .catch is only required once
add(1,1).then((sum) => {
    console.log(sum)
    return add(sum, 4) 
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})
