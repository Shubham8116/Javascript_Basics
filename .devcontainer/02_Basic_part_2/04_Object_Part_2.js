const user=new Object() // singleton object
const user1={}
console.log(user)//prints {}
console.log(user1)// prints {}

user1.name="shubham"
user1.id=8
user1.city="nagpur"
console.log(user1) // { name: 'shubham', id: 8, city: 'nagpur' }

//objects in object

let user3={
    email:"gamil.com",
    fullname:{
        firstname:"shubham",
        lastname:"uprikar"
    }
}
console.log(user3.fullname.firstname)

let obj1={1:"a",2:"b",3:"c"}
let obj2={4:"d",5:"e",6:"f"}
let obj3={7:"g",8:"h",9:"i"}

//let obj4={obj1,obj2} //  object inside object
// console.log(obj4)// {obj1: { '1': 'a', '2': 'b', '3': 'c' },obj2: { '4': 'd', '5': 'e', '6': 'f' }}

let obj4= Object.assign({},obj1,obj2,obj3)// merging objects
console.log(obj4)//{'1': 'a','2': 'b','3': 'c','4': 'd','5': 'e','6': 'f','7': 'g','8': 'h','9': 'i'}

//or another method of spread like array

let obj5={...obj1,...obj2,...obj3}
console.log(obj5)

// array of objects
let database=[
    {id:1,name:"shubham"},
    {id:2,name:"rahul"},
    {id:3,name:"pooja"},
]
console.log(database[1])//{ id: 2, name: 'rahul' }
console.log(database[1].id)//2

console.log(Object.keys(obj4))//['1', '2', '3','4', '5', '6','7', '8', '9']
console.log(Object.values(obj4))//[ 'a', 'b', 'c','d', 'e', 'f','g', 'h', 'i']
console.log(Object.entries(obj4))// [ [ '1', 'a' ],
   // [ '2', 'b' ],
  //  [ '3', 'c' ],
  //  [ '4', 'd' ],
  //  [ '5', 'e' ],
  //  [ '6', 'f' ],
  //  [ '7', 'g' ],
  //  [ '8', 'h' ],
  //  [ '9', 'i' ] ]

  //object destructuring

  let address={
    line1:" near",
    line2:" state",
    line3:" bank"
  }

  const{line3}=address
  console.log(line3) // bank
  const{line3:add}=address
  console.log(add)// bank