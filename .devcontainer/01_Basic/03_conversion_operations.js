let score=90

console.log(typeof score)// prints number
 score="90"
 console.log(typeof score)//prints string

 let inputValue=Number(score) //
 console.log(typeof inputValue) // prints number

 //but if
 score="90abc" // then it will convert to number but when you print variable score using console.log then it will print NaN

 inputValue=Number(score) //
 console.log(typeof inputValue) 
 console.log(inputValue)
 //similarly for score=null it will print NaN
 // for score=true will print 1 for false will print 0

let answer=1
let convertBoolean=Boolean(answer)
console.log(typeof convertBoolean)// will print boolean
console.log(convertBoolean)//will print true and for 0 will print false
//if the value is "shubham" then it will print true and if the value is "" then it will print false
//similarly
let value=80
let convertString=String(value)
console.log(convertString)//print 80
console.log(typeof convertString)//print string

/* *****************operations******************* */

let opValue=10
let newOpValue= -opValue
console.log(newOpValue) //prints -10
console.log(4+9)//13
console.log(4-9)//-5
console.log(4*9)//36
console.log(4/9)//0.4444
console.log(4%9)//4
console.log(4**3)//64

console.log("1"+2)//prints 12
console.log(4+"3")// prints 43
console.log("4"+"9")// 49
console.log(4+9+"3")// 133
console.log(4+"9"+3)// 493
//it is like java, if it finds string first then remaining all will be treated as string and before string occuring it will perform normal arithmatic opearations
let  num1,num2,num3
num1=num2=num3=2+2
let gameCounter=100
gameCounter++// similarly there is ++gameCounter which will increament before usage like java
console.log(gameCounter)