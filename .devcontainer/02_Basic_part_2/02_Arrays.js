let value1=[1,3,4,5,6]
let value2=[7,89,90,6]
//value1.push(value2)// array inside array, the array value2 attach to last position of value1 as a single index
console.log(value1)//[ 1, 3, 4, 5, 6, [ 7, 89, 90, 6 ] ]
let value3=value1.concat(value2)//merging two aarays
console.log(value3)
//another method
let all=[...value1,...value2]
console.log(all)

let newArray=[1,3,4,[4,5,6,[4,6]],9,[6,4],0]
console.log(newArray.flat(Infinity))// spread array in one single array
console.log(Array.from("shubham")) //['s', 'h', 'u','b', 'h', 'a','m']

let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3)) // [ 100, 200, 300 ]