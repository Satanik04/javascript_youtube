if(true){
    let a=23
    const b=45
    var c=78
}

//console.log(a)
//console.log(b)
//console.log(c) 

function one(){
    const username="satanik"
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
//one()


const user={
    username:"satanik",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username},welcome to website`)
    }  //this refer to the current senario
}
// console.log(user.username)
// console.log(user.welcomemessage())
// user.username="sam"
// console.log(user.welcomemessage())
// console.log(this)  //in this case nothing willl be printed

//arrow function

const chai=() =>{
    let username="satanik"
    console.log(this.username)
}
//chai()

// const addnum=(num1,num2)=>{
//     return num1+num2  //explict return
// } 
// console.log(addnum(2,3))

const addnum=(num1,num2)=>(num1+num2)  //implicit return 

//console.log(addnum(3,6))

(function chai1(){
    console.log(`DB connected`);
})()