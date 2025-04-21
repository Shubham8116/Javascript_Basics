let myDate=new Date()
console.log(typeof myDate)//object
console.log(myDate.toString())//Mon Apr 21 2025 20:09:16 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString())//4/21/2025, 8:09:16 PM
console.log(myDate.toDateString())// Mon Apr 21 2025

let mycreatedDate=new Date(2025,3,10)
console.log(mycreatedDate.toDateString()) //month start from 0 - Thu Apr 10 2025

let myCreatedNewDate=new Date("2025-01-14")// here month start from 1 Tue Jan 14 2025
console.log(myCreatedNewDate.toDateString())

let newDate =Date.now() 
console.log(newDate)//1745266758075 in miliseconds // this is useful when on ticket booking sites we need comaprison of booking time
console.log(mycreatedDate.getDate())
console.log(mycreatedDate.getDay())
console.log(mycreatedDate.getMonth()+1) // +1 this is for month starts from 0 so, add one to it
console.log(mycreatedDate.getTime())
console.log(mycreatedDate.getHours())

