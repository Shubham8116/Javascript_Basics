// String interpolation
let surname="kumar"
let age="30"
console.log(`hello, my surname is ${surname} and my age is ${age}`)

let name="shubham"// declaring string
console.log(name[0])//s
let city= new String("nagpur") // declaring String in another type , now we can access methods of String
console.log(city[1])//a
console.log(city.substring(0,4))//
console.log(city.slice(2,4))//
console.log(city.trim())//
//difference between substring and slice is that negative index are allowed in slice but not in substring
console.log(city.toUpperCase())
console.log(city.length)
console.log(city.indexOf('p'))
console.log(city.charAt(2))
