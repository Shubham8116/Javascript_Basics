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

console.log(names[0])
console.log(values.id)

/* *************** Stack and Heap Memory ******************* */


//primitive datatypes store in stack while non primitive datatype store in heap

let inputOne={          //inputOne will store in stack and get reference to heap memory for following data
    email:"shubham.com", // email will store in heap
    city:"nagpur" // city will store in heap
}
let inputTwo=inputOne // inputTwo will get reference of inputOne
inputTwo.email="hello.com"
console.log(inputOne.email)//"hello.com"
console.log(inputTwo.email)//"hello.com"

// but in case of stack memory values not changes
let num1=10
let num2=num1
num2=20
console.log(num1)//10
console.log(num2)//20
