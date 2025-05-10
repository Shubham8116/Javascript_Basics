const promiseOne= new Promise(function(resolve,reject)
{
    //do an async task
    //db calls
    setTimeout(function(){
        console.log('hello shubham');
       resolve();   
       // resolve connects to .then, if you dont write this then .then will not run

    },2000)
    
})

promiseOne.then(function(){
    console.log("how are you!")
})

// you can write directly without using variable like
// new Promise(function(resolve,reject){}).then(function(){})

//Now passsing values in resolve() so that .then will catch

const promiseTwo=new Promise(function(resolve,reject){
               resolve({username:"shubham",email:"suprikar5@gmail.com"});
})

promiseTwo.then(function(user){
    console.log(user);
})

//promise chaining and use of reject

const promiseThree= new Promise(function(resolve,reject){

    setTimeout(function(){
        let error=false;
        if(!error)
        {
        resolve({userID:"neha",pass:"abcd"});
        }
        else{
            reject("Something went wrong");
        }
    },1000)
})

promiseThree.then(function(user){
    return user;
}).then(function(username)
{
    console.log(username.userID);
}).catch(function(error)
{
    console.log(error);
}).finally(function(){                    /* .finally is optional, no need to write it compulsory*/
    console.log("this is finally block");
    
})

//use of asunc and await

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error)
        {
            resolve({username:"priya"});
        }
        else
        {
            reject("priya is  missing from instagram");
        }

    },3000)

})

async function consumePromise() {
    try{
     const obj=await promiseFour
     console.log(obj)
    }
    catch(error){

        console.log(error)
    }
    
}

consumePromise()

// calling API using async and await

// async function consumeAPI() {
//     try{
//     const response= await fetch("https://api.github.com/users/Shubham8116");
//     const data= await response.json();
//     console.log(data);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }

    
// }
// consumeAPI()

// using fetch

fetch('https://randomuser.me/api/')
.then((response)=>{
           return response.json();
           
})
.then((response)=>{
    console.log(response);
})
.catch((error)=>{

    console.log(error);
})

//on terminal fetch output will be shown first then other output will be displayed.

