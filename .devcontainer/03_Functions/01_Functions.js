function myFunction()
{
    console.log("hello")
    console.log("shubham")
}

myFunction() // calling function

function addTwoNumbers(num1,num2)
{
    console.log(num1+num2)
}

addTwoNumbers(4,6)//10
addTwoNumbers(4,"a")//4a
addTwoNumbers(4,null)//4

const result=addTwoNumbers(8,9)//print 17
console.log(result)//print undefined, dont think result will store 17

//to return value in variable we need to define return keyword

function addNumbers(num1,num2)
{
    let result=num1+num2
    return result
}

let value=addNumbers(8,9)
console.log(value) // now it will print 17
// but suppose if we write anything after return statement, then it will not execute

function checkLoggedIn (username)
{
    return `${username} just logged in`
}

console.log(checkLoggedIn("shubham"))// if we dont write console.log then it will not print , only return the value

//but suppose if we dont pass argument to function
console.log(checkLoggedIn())//then it will print 'undefined just logged in'

function checkUserName(username)
{
if(username===undefined)
{
    return "please enter a username"
}
return `${username} logged in`
}

console.log(checkUserName())// please enter a username
console.log(checkUserName("shubham"))//shubham logged in
// to provide deafult value

function checkUser(username="ram")
{
if(username===undefined)
{
    return "please enter a username"
}
return `${username} logged in`
}

console.log(checkUser())//ram logged in
console.log(checkUser("shubham"))//shubham logged in

//rest operator or spread operator

function myNewFunction(...num1)
{
    return num1
}

console.log(myNewFunction(100,400,67,89,90))//[ 100, 400, 67, 89, 90 ]

//passing object to function

let obj={
    id:1,
    name:"shubham",
    city:"nagpur"
}

function testObject(anyObject)
{
   console.log(`${anyObject.name} , ${anyObject.city}`)
}

testObject(obj)