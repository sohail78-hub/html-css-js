// ++++ Static Properties +++++++++++

class User {
    constructor (username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    // createId() {   // suppose to create id of an User
    //     return `123`;
    // }
    
    static createId() {   // 
    return `123`;
    }

};

const sohail = new User ("sohail");
console.log(sohail.createId());
