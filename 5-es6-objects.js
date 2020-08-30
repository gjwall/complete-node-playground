// Object property shorthand

const name = 'Graham'
const userAge = 43

const user = {
    //name: name,
    // New way, if the variable names match a property is created to substitute for `name: name`
    name,
    age: userAge,
    location: 'Edinburgh'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notedbook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

console.log(product)

// Old way
/* 
const label = product.label
console.log(label) 
*/
// New way, destructuring
// the name of the property needs to match the name in the object
// renames can be done inline, see label
// default values, see rating. Only works if there is no property in the object
// const {label:productLabel, stock, rating = 5} = product 
// console.log(productLabel + ' ' + stock + ' ' + rating)

// Can destructure inline in a function call
const transaction = (type, /*myProduct*/ {label, stock = 0 } = {} ) => {
    console.log(type, label, stock)
}

transaction('order', product)

transaction('order')
