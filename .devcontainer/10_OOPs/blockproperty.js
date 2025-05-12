// we can not override value of pi in math class because, the writable property of pi is false by default
// to access this properties use - 
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);
//output - 

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
  
// Math.PI = 5
// console.log(Math.PI); no chnage in pi value

const obj = {
    name: 'mr shubham',
    city: "nagpur",
    isAvailable: true,

    operation: function(){
        console.log("not working");
    }
}

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// now we are setting writable and enumerable to false for name property

Object.defineProperty(obj, 'name', {
    writable: false,
    enumerable: false,
    
})

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

for (let [key, value] of Object.entries(obj)) {
    if (typeof value != 'function') {  // to check if it is not function because we dont want loop over function
        
        console.log(`${key} : ${value}`);
    }
}