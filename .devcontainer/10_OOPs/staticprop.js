class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){  //static keyword blocks the access of method by an object 

        return `123`
    }
}

const obj = new User("shubham")
   console.log(obj.createId())     // will give error 

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const stu = new Teacher("iphone", "i@phone.com")
console.log(stu.createId());                      // will give error 

