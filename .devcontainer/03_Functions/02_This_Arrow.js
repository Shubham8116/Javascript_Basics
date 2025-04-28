const user={
    name:'shubham',
    id:10,
    price:100,
    welcome:function()
    {
      console.log(`${this.name}, welcome`)//this refer to current context, if you dont write this then it gives error
      console.log(this)
    }
}
user.welcome()
user.name='rahul'
user.welcome()

// browser ke andar global object window hota hai
//closure means inner funtcion can access variables of outer function, but vice versa can not happen
//object ke andar this kam karega but not inside function

function hello()
{
    let user='shubham'
    console.log(this.user)
}
hello()// prints undefined

//Arrow function
//const example=function(){ } // in place of normal function write it as-

const example=()=>{
    let username='shubham'
    console.log(this.username) //isme bhi this use nahi hota, prints undefined
    console.log(username)//prints shubham
}
example()

//explicit calling
const extra=(num1,num2)=>{
    return num1+num2
}
console.log(extra(3,4))

// implicit calling
const newExtra=(num1,num2)=>(num1+num2)
console.log(newExtra(6,8))

//agar {} braces use kiya to return likhna padega, nahi to koi jarurat nahi
//to return object use {}
 const data=()=>({username:'shubham'})
console.log( data().username);

//immediately invoked function

(function myfunction()
{
    console.log('hello');
})();

//with arrow function

((name)=>
{
    console.log(`hello, ${name}`)
}

)('shubham');

// immediately invoked function ke baad semicolon dena