// arrays are  collection of elements of different data types

let newArray=[4,5,6,"shubham",true]
console.log(typeof newArray)

let myArr= new Array(3,5,6,7,8)
myArr.push(10)//inserts 10 at the end
console.log(myArr)
myArr.pop()//removes last value here is 10
console.log(myArr)
myArr.unshift(0)//inserts 0 at the start of array
console.log(myArr)
myArr.shift()//removes starting value here is 0
console.log(myArr.includes(90)) // false, it check 90 is present or not
console.log(myArr.indexOf(100))// prints -1 because 100 is not present
let newValue=myArr.join()// converts array to String
//slice and splice
let num1=[1,3,4,5,6,7]
console.log(num1.slice(0,3))//does not chnage the original array
console.log(num1)//array will be same
console.log(num1.splice(0,2))//changes the original array
console.log(num1)//[4,5,6,7]

