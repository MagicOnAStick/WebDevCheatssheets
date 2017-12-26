
class User{
    
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countUsers(){
        console.log('There are max. 50 users');
    }

    register(){
        console.log(this.username+ " is now registered");
    }
}

/* 
let bob = new User("bob","bob@mail.com","123");
bob.register(); */

//User.countUsers();

class Member extends User{
    constructor(username,email,password,memberPackage){
        super(username,email,password);
        this.memberPackage = memberPackage;
    }

    getMemberPackage(){
        console.log("User "+ this.username +" is subscribed to package "+this.memberPackage);
    }
}

let mike = new Member("mike", "Mike@mail.com","123","standard");
mike.register();
mike.getMemberPackage();
Member.countUsers();