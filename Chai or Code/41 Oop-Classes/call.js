// ++++++++++++ Call Function ++++++++++++

function setUsername(username){ // setting user name
    this.username = username;
    // console.log(username);
}

function createUser (username,email,password){ // Creating users
// setUsername(username);  // username outsourcing from setUsername function, 
                        // when Run createUser() than username will not proceed by this outsource method
                        // this process only showing reference not calling

setUsername.call(this,username); // we use call method to hold the refernece & call username from setUsername
this.email = email;
this.password = password;
}

const chai = new createUser("Chai","chai@gmail.com","4445");
console.log(chai);