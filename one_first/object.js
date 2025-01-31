const jsuser={
    name:"satanik",
    age:18,
    location:"kolkata",
    email:"manasatanik@gmail.com"
}//object create

console.log(jsuser["email"])

jsuser.greeting=function(){
    console.log(`hello js user,${this.location}`)
}
console.log(jsuser.greeting())

//const tinderuser=new Object()
const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="satanik"
console.log(tinderuser)

const regularuser={  //nested object
    email:"satanik@gmail.com",
    fullname:{
       userfullname:{
        firstname:"satanik",
        lastname:"manna"
       }
    }
}

console.log(regularuser.fullname.userfullname)