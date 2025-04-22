//singlton
//Object.create

//Object literals
let mySym=Symbol("key1")
let obj={
    name:"shubham",
    "email":"suprikar5gmial@.com",
    id:3,
    city:"nagpur",
    //for Symbol
    [mySym]:"value"
}

console.log(obj.name)
console.log(obj["email"])//because we declared key email as "email" so, it can not be accessed using dot operator
console.log(obj.id)
//accessing symbol
console.log(obj[mySym])//prints value

//changing values of object
obj.city="pune"// value will change
console.log(obj)
//Object.freeze(obj)// no chnages will occur after freeze
//obj.city="wadsa"// no chnages will propogate
//console.log(obj)

//adding a function to object

obj.functionObj= function(){
    console.log("hello")
}
console.log(obj.functionObj)// prints [function(anonymous)]
console.log(obj.functionObj())//prints hello

// string interpolation in object

obj.greeting=function()
{
    console.log(`hello ${this.name} how are you ?`)
}

console.log(obj.greeting())