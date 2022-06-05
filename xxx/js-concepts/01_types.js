//null, undefined, boolean, number, string, object, symbol

console.log(typeof null) //peremennaj objvlena no net znachenia
console.log(typeof undefined)
console.log(typeof true)
console.log(typeof 0)
console.log(typeof NaN) // not a number
console.log(typeof 'Java Script')
console.log(typeof Math)
console.log(typeof Symbol( 'JS'))

console.log(typeof function () {}) // object
console.log(typeof undefined*1)

let a='JS'
if (a){
    console.log('I am:', a)
}

// False nam budadut : '', 0, null, undefined, NaN, false
console.log(Boolean(''))
console.log(Boolean(' '))
console.log(Boolean('Hello'))


