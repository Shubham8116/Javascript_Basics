//use of filter with array
const values=[1,2,3,4,5,6,7,8,9,10]

const output=values.filter((input)=>input>5)
console.log(output)

//same above operation can be done using forEach loop
const newValues=[]

values.forEach((num)=>{
    if(num>5)
    {
        newValues.push(num)
    }
})
console.log(newValues)

// use of map

const pincode=[11,45,67,89,56,78,90,34]

console.log(pincode.map((value)=>value+10))

//chaining

console.log(pincode.map((value)=>value+10)
                   .map((value)=>value*10)
                   .filter((value)=>value>600)
)

//reduce
//reduce method has two variables , first is accumulator and second is currentvalue
//then there is initial value, which is in firsttime used by accumulator
//here we have provided 0 as initial value
//so, 0+1=1 will be stored in acc then,
//1+3=4 will stored in acc then,
//4+4=8 and so on...
const code=[1,3,4,5,6,7,8]
console.log(code.reduce((acc,currval)=>acc+currval,0))//34

//using array of objects

const cars=[
    {
        name:"tata",
        price:10000
    },
    {
        name:"maruti",
        price:20000
    },
    {
        name:"hyundai",
        price:30000
    },
    {
        name:"mahindra",
        price:40000
    },
]

console.log(cars.reduce((acc,item)=>acc+item.price,0)//100000
)