// const square = function(x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// Only immediate returns can use the form below
// More complex functions need to use the sample directly above
const square = (x) => x * x

console.log(square(3))

// const event = {
//     name: 'party',
//     printGuestList: function() {
//         console.log('Guest list for ' + this.name)
//     }
// }

// Arrow functions do not have access to "this"
// Not used for methods in objects
// const event = {
//     name: 'party',
//     printGuestList: () => {
//         console.log('Guest list for ' + this.name)
//     }
// }

// Alternative concise syntax for methods
// Note that this.guestList does not find
const event = {
    name: 'party',
    guestList: ['Me', 'You', 'Other'],
    
    printGuestList() {

        console.log('Guest list for ' + this.name)
        // this.guestList.forEach(function(guest) {
        //     console.log(guest + ' is attending the ' + this.name)
        // })
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending the ' + this.name)
        })
    }
}

event.printGuestList()