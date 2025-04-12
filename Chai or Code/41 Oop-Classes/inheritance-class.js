// ++++++  Inheritance with Class ++++++++++++++

class User {
    constructor(username){
        this.username = username;
    }

    logMe(){ // this function just give user name console print
        console.log(`USERNAME is ${this.username}`);
    }
};

class Teacher extends User {                // a keyword extends available
    constructor(username,email,password){   // we create new teacher's constructors like (username,email & password)
        super(username);                    // super() keyword works like call() but super will use in class
                                            // super() keywords search extends class (here User is Extends class)
                                            // it will take username and will move to User class & bring Username;
        
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`); // adCourse function will show,
                                                            // taken username from User class in this function.
    }
}

const chai = new Teacher("Pakorey","abc@gmail.com","123");
chai.addCourse();

const masalaChai = new User("Masala Chai");
masalaChai.logMe();

// if ask the logic
console.log(chai instanceof Teacher); // instaceof key will check ( is Chai is an instance of Teacher function ?)
                                // its True
console.log(masalaChai instanceof Teacher); // its false
console.log(masalaChai instanceof User); // its ture