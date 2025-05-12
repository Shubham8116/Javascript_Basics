class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}$#`
    }

    set password(value){
        this._password = value
    }
}

const obj = new User("hello@gmail.com", "abc")
console.log(obj.email);

// Here inside the getter and setter methods we are writing '_'before property name because we have defined both constructor and getter setter so, javascript will get confused from where to set values so, there will be race condition .
// Therefore we write '_' before property to make it private property to avoide confusion inside getter and setter.
// by default there are getter and setter methods for every properties.
// by writing getter and setter methods manually we can override them. 


