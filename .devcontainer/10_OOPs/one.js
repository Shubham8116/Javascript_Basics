function operation(username,pass,count)
{
    this.username=username
    this.pass=pass
    this.count=count
return this
}

// const userOne=operation("shubham",1234,10);
// console.log(userOne)
// const userTwo=operation("neha",5678,10);
// console.log(userOne) // now here we are printing userOne but the output will be - "neha",5678,10
//means userTwo overrride userOne that is why we need to use new keyword.

const userOne=new operation("shubham",1234,10);
console.log(userOne)
const userTwo=new operation("neha",5678,10);
console.log(userOne) // now output will be - ("shubham",1234,10)

