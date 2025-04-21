let value=new Number(100)
console.log(value)
console.log(value.toString())//converts to string
console.log(value.toString().length)//length
let anotherValue=100.8585959
console.log(anotherValue.toFixed(2))//prints 100.86
console.log(anotherValue.toPrecision(3)) // prints 101
console.log(anotherValue.toPrecision(4)) // prints 100.9 always use precision when you know exact digits before decimal
console.log(anotherValue.toPrecision(2)) // prints 1.0e+2
let anotherNumber=100000000
console.log(anotherNumber.toLocaleString('en-IN')) // 10,10,00,000

/* **************** Maths *********************** */

let digits=-10
console.log(Math.abs(digits))//10
console.log(Math.round(10.5))//11
console.log(Math.min(3,5,6,7,8))//3
console.log(Math.max(3,5,6,7,8))//8
console.log(Math.random())//prints value between 0 to 1
//to print value between 1 to 10 use this formula
console.log(Math.floor(Math.random()*10+1))
// to print value between certain range use this formula
let min=20
let max=30
console.log(Math.floor(Math.random()*(max-min+1))+min)