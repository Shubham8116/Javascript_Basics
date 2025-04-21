// Primitive data types represent simple, built-in values like integers, booleans, etc. they stored directly to memory
// Non-primitive data types, on the other hand, are more complex and include objects, arrays, etc. that store and manipulates data,They hold references (memory addresses) to objects.

//primitive datatypes
//String, Number, Boolean, Null, Symbol, Undefined, BigInt

let value=Symbol("123")
let newValue=Symbol("123")
console.log(typeof value)//prints symbol

console.log(value===newValue)// false
//Non- primitive datatypes(reference)

// Array, Function, Object

 // array
let names=["shubham","rahul","pooja","karan"]
let values={
    id:1,
    name:"shubham",
    city:"nagpur"
}
console.log(typeof names)//prints object
console.log(typeof values)//prints object

//function
let myFunction= function()
{
    console.log("hello");
}

console.log(typeof myFunction)//prints function